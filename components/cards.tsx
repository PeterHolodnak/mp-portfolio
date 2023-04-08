import styles from "../styles/cards.module.scss";

type CardProps = {
    title: string;
    text?: string;
    imageUrl: string;
};

export default function Cards({ items }: { items: CardProps[] }) {
    return (
        <section className="container floor">
            <div
                className={`${styles.cards} ${
                    items.length == 5 ? styles.count5 : ""
                }`}
            >
                {items.map((item, i) => (
                    <div key={i} className={styles.card}>
                        <img
                            src={item.imageUrl}
                            alt=""
                            className={styles.image}
                            width="60"
                            height="60"
                        />
                        <h2>{item.title}</h2>
                        {item.text && <div>{item.text}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
}
