'use client';
import ResultMessage from '../ResultMessage/ResultMessage';
import styles from './Form.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export default function Form() {
    const [name, setName] = useState('');
    const [guestNames, setGuestNames] = useState<string[]>([]);
    const [attendance, setAttendance] = useState<'come' | 'cantCome' | ''>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [isFormSendSuccess, setIsFormSendSuccess] = useState<boolean>(false);
    const [isCome, setIsCome] = useState<boolean>(false);

    const handleGuestChange = (index: number, value: string) => {
        const updatedGuests = [...guestNames];
        updatedGuests[index] = value;
        setGuestNames(updatedGuests);
    };

    const addGuestField = () => {
        setGuestNames([...guestNames, '']);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const guestString = guestNames.filter(Boolean).join('; ');

        const payload = {
            name,
            guests: guestString,
            attendance: attendance === 'come' ? 'приду' : 'не приду',
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
                setIsFormSendSuccess(true);
                setIsCome(attendance === 'come');
                setName('');
                setGuestNames([]);
                setAttendance('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.log(error);
        }
    };

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit} className={clsx(styles.form, { [styles.resultForm]: isFormSendSuccess })}>
                {isFormSendSuccess ? (
                    <ResultMessage isCome={isCome} />
                ) : (
                    <>
                        <h2 className={styles.title}>Сможете посетить <br/> мероприятие?</h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше имя и фамилия"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                            required
                        />

                        {guestNames.map((guest, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`Имя гостя ${index + 1}`}
                                value={guest}
                                onChange={(e) => handleGuestChange(index, e.target.value)}
                                className={styles.input}
                            />
                        ))}

                        <button
                            type="button"
                            className={styles.addGuestButton}
                            onClick={addGuestField}
                        >
                            <span>Со мной +1 (пара или ребенок)</span>
                        </button>

                        <div className={styles.options}>
                            <label>
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="come"
                                    checked={attendance === 'come'}
                                    onChange={() => setAttendance('come')}
                                />
                                <span className={styles.radioOuter}>
                                    <span className={styles.radioInner}></span>
                                </span>
                                <span>Буду на свадьбе</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="cantCome"
                                    checked={attendance === 'cantCome'}
                                    onChange={() => setAttendance('cantCome')}
                                />
                                <span className={styles.radioOuter}>
                                    <span className={styles.radioInner}></span>
                                </span>
                                <span>Не смогу прийти</span>
                            </label>
                        </div>

                        <button type="submit" className={styles.button} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Отправка...' : 'ОТПРАВИТЬ'}
                        </button>

                        {status === 'error' && (
                            <p className={styles.error}>Ошибка при отправке. Попробуйте позже.</p>
                        )}
                    </>
                )}
            </form>
        </div>
    );
}
