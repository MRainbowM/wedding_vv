'use client';
import ResultMessage from '../ResultMessage/ResultMessage';
import styles from './Form.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        guestName: '',
        attendance: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const [isFormSendSuccess, setIsFormSendSuccess] = useState<boolean>(false);
    const [isCome, setIsCome] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsFormSendSuccess(true);
                setStatus('success');
                setFormData({ name: '', guestName: '', attendance: '' });

                if (formData.attendance === 'cantCome') {
                    setIsCome(false);
                } else {
                    setIsCome(true);
                }
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit} className={clsx(styles.form, { [styles.resultForm]: isFormSendSuccess })}>
                {isFormSendSuccess ? (
                    <ResultMessage isCome={isCome} />
                ) : (<>
                    <h1 className={styles.title}>
                        Сможете ли вы посетить<br />мероприятие?
                    </h1>

                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя и фамилия"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />

                    {formData.attendance === 'withGuests' && (
                        <input
                            className={styles.input}
                            type="text"
                            name="guestName"
                            placeholder="Имя вашего гостя"
                            value={formData.guestName}
                            onChange={handleChange}
                        />
                    )}

                    <div className={styles.options}>
                        <label>
                            <input
                                type="radio"
                                name="attendance"
                                value="withGuests"
                                checked={formData.attendance === 'withGuests'}
                                onChange={handleChange}
                            />
                            <span className={styles.radioOuter}>
                                <span className={styles.radioInner}></span>
                            </span>
                            <span>
                                <b>Со мной будет еще гость(и)</b> (вторая половинка или дети)
                            </span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="attendance"
                                value="alone"
                                checked={formData.attendance === 'alone'}
                                onChange={handleChange}
                            />
                            <span className={styles.radioOuter}>
                                <span className={styles.radioInner}></span>
                            </span>
                            <span><b>Буду на свадьбе</b></span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="attendance"
                                value="cantCome"
                                checked={formData.attendance === 'cantCome'}
                                onChange={handleChange}
                            />
                            <span className={styles.radioOuter}>
                                <span className={styles.radioInner}></span>
                            </span>
                            <span><b>Не смогу прийти</b></span>
                        </label>
                    </div>

                    <button type="submit" className={styles.button} disabled={status === 'loading'}>
                        {status === 'loading' ? 'Отправка...' : 'ОТПРАВИТЬ'}
                    </button>

                    {status === 'error' && (
                        <p className={styles.error}>Ошибка при отправке. Попробуйте позже.</p>
                    )}
                </>)}
            </form>

        </div>
    );
}