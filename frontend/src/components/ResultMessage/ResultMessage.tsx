import styles from './ResultMessage.module.scss';

interface ResultMessageProps {
    isCome: boolean
}


export default function ResultMessage(
    { isCome }: ResultMessageProps
) {
    const title = isCome ? 'Мы будем очень рады вас видеть! 🤍' : 'Нам очень жаль, что у вас не получится!';
    const text = isCome ? 'Ждем вас 22 июля по адресу Ленина, 46' : 'Вы сможете заполнить форму повторно, если что-то изменится. Будем ждать! 🤍';
    
    return (
        <div className={styles.root}>
            <span className={styles.title}>{title}</span>
            <span className={styles.text}>{text}</span>
        </div>
    );
}