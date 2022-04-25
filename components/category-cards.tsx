import Image from "next/image";
import styles from "../styles/category-cards.module.scss";

type CategoryCardProps = {
    title: string;
    items: string[];
    image: string;
};

export default function CategoryCards({
    items,
}: {
    items: CategoryCardProps[];
}) {
    return (
        <section className="container floor">
            <div className={styles.cards}>
                {items.map((item, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={item.image}
                                alt=""
                                className={styles.image}
                            />
                            {/* <Image
                                src={item.image}
                                alt=""
                                layout="fill"
                                className={styles.image}
                            /> */}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.items}>
                                {item.items.map((listItem, index) => (
                                    <div key={index} className={styles.item}>
                                        {listItem}
                                    </div>
                                ))}
                            </div>
                            <h2 className={styles.title}>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
