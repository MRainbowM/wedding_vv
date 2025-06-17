import styles from './Content.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export default function Content() {
    return (
        <div className={styles.root}>
            <div className={styles.circle}>
            </div>

            <div className={styles.content}>
                <div className={styles.left}>

                    <div className={clsx(
                        styles.oliveItem,
                        styles.oliveLT
                    )}></div>
                    <div className={clsx(
                        styles.oliveItem,
                        styles.oliveLB
                    )}></div>
                </div>
                <div className={styles.center}>
                    <div className={clsx(
                        styles.block,
                        styles.guest
                    )}>
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

                    <div className={clsx(
                        styles.block,
                        styles.time
                    )}>
                        <span className={styles.title}>Время</span>
                        <div className={styles.text}>
                            <span className={styles.timeAndSpace}>
                                22 Июля в 17:00
                            </span>
                        </div>

                        <div className={styles.sep}>
                            <Image
                                className={styles.arrowLeft}
                                src="/images/arrow.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                            />
                            <Image
                                className={styles.arrowRight}
                                src="/images/arrow.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>

                    <div className={clsx(
                        styles.block,
                        styles.space
                    )}>
                        <span className={styles.title}>Место</span>
                        <div className={styles.text}>
                            <span className={styles.timeAndSpace}>
                                Ленина, 46, банкетный зал «Эстрада» летняя веранда
                            </span>
                        </div>
                        <div className={styles.sep}>
                            <Image
                                className={styles.arrowLeft}
                                src="/images/arrow.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                            />
                            <Image
                                className={styles.arrowRight}
                                src="/images/arrow.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>

                    <div className={clsx(
                        styles.block,
                        styles.ps
                    )}>
                        <div className={styles.text}>
                            <p>
                                P.S. Друзья, просьба обойтись без цветов, нам некуда их ставить
                            </p>
                            <p>
                                Дресс-код свободный
                            </p>
                        </div>

                    </div>
                </div>
                <div className={styles.right}>
                    <div className={clsx(
                        styles.oliveItem,
                        styles.oliveRT
                    )}></div>
                    <div className={clsx(
                        styles.oliveItem,
                        styles.oliveRB
                    )}></div>
                </div>
            </div>
        </div >
    )
}