import { useEffect, useState } from "react";
import styles from "../styles/hero-carousel.module.scss";

export default function HeroCarousel() {
    const items = [
        {
            text: "Chutnučké kuchyne",
            image: "/images/carousel/kitchen.webp",
        },
        {
            text: "Krásne stolíky",
            image: "/images/carousel/table.webp",
        },
        {
            text: "Sexy bazény",
            image: "/images/carousel/pool.jpg",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            if (activeIndex >= items.length - 1) {
                setActiveIndex(0);
            } else {
                setActiveIndex(activeIndex + 1);
            }
        }, 4321);
    }, [activeIndex]);

    return (
        <section className={styles.carousel}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${
                        index == activeIndex ? styles.active : ""
                    }`}
                    style={{ backgroundImage: `url("${item.image}")` }}
                >
                    <div className={`container ${styles.itemContainer}`}>
                        <h1 className={styles.text}>{item.text}</h1>
                    </div>
                </div>
            ))}
        </section>
    );
}
