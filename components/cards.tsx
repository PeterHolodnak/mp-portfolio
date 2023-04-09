import { useMemo } from "react";
import styles from "../styles/cards.module.scss";

type CardProps = {
    title: string;
    text?: string;
    imageUrl: string;
};

export default function Cards({ items }: { items: CardProps[] }) {
    const cardsClassName = useMemo(() => {
        let result = styles.cards;

        if (items.length === 5) {
            result += ` ${styles.count5}`;
        }

        return result;
    }, [items]);

    return (
        <section className="container floor">
            <div className={cardsClassName}>
                {items.map((item, i) => (
                    <div key={i} className={styles.card}>
                        <img
                            src={item.imageUrl}
                            alt=""
                            width="60"
                            height="60"
                        />
                        <h2 className={styles.title}>{item.title}</h2>
                        {item.text && <div>{item.text}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
}
