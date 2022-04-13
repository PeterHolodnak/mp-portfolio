import Image from "next/image";
import styles from "../styles/cards.module.scss";

type CardProps = {
    title: string;
    text: string;
    imageUrl: string;
};

export default function Cards({ items }: { items: CardProps[] }) {
    return (
        <section className="container floor">
            <div className={styles.cards}>
                {items.map((item, i) => (
                    <div key={i} className={styles.card}>
                        <Image
                            src={item.imageUrl}
                            alt=""
                            width={60}
                            height={60}
                            className={styles.image}
                        />
                        <h2>{item.title}</h2>
                        <div>{item.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
