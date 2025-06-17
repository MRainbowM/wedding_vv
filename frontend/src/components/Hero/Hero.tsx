import styles from './Hero.module.scss';


export default function Hero() {
    return (
        <div className={styles.root}>
            <div className={styles.invite}>
                <span>Приглашаем на свадьбу</span>
            </div>
            <div className={styles.names}>
                <span>Вадима и Виктории</span>
            </div>
        </div>
    )
}