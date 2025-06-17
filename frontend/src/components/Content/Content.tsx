import styles from './Content.module.scss';

export default function Content() {
    return (
        <div className={styles.root}>
            <div className={styles.circle}>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>Дорогие гости!</span>

                <div className={styles.text}>
                    <p>
                        Мы с радостью приглашаем вас разделить с нами самый тёплый и важный день — нашу свадьбу
                    </p>
                    <p>
                        Будем искренне рады видеть вас среди самых близких людей
                    </p>
                </div>
            </div>

        </div>
    )
}