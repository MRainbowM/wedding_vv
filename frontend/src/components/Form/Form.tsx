'use client';
import styles from './Form.module.scss';
import { useState } from 'react';


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

    const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

    console.log(`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID}/exec`);

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
                setStatus('success');
                setFormData({ name: '', guestName: '', attendance: '' });

                if (formData.attendance === 'cantCome') {
                    setSubmittedMessage('Очень жаль...');
                } else {
                    setSubmittedMessage('Будем вас ждать!');
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
            {submittedMessage ? (
                <div className={styles.message}>
                    <h2>{submittedMessage}</h2>
                </div>
            ) : (


                <form onSubmit={handleSubmit} className={styles.form}>
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
                </form>
            )}
        </div>
    );
}