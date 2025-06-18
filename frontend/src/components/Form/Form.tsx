'use client';
import styles from './Form.module.scss';
import { useState } from 'react';


export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        attendance: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <div className={styles.root}>
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

                <button type="submit" className={styles.button}>
                    Отправить
                </button>
            </form>
        </div>
    );
}