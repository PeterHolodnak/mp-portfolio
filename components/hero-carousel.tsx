import { useEffect, useState } from "react";
import styles from "../styles/hero-carousel.module.scss";

export default function HeroCarousel() {
    const items = [
        {
            text: "Bazény",
            image: "/images/gallery/pools/baz-8.webp",
            size: 108,
        },
        {
            text: "Zastrešenia",
            image: "/images/gallery/roofs/flat-1.webp",
            posY: 75,
        },
        {
            text: "Technológie",
            image: "/images/gallery/technology/tech-7.webp",
            posY: 30,
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
    }, [activeIndex, items.length]);

    return (
        <section className={styles.carousel}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${
                        index == activeIndex ? styles.active : ""
                    }`}
                    style={{
                        backgroundImage: `url("${item.image}")`,
                        backgroundPositionY: `${item.posY ?? 50}%`,
                        backgroundSize: item.size ? `${item.size}%` : "cover",
                    }}
                >
                    <div className={`container ${styles.itemContainer}`}>
                        <h1 className={styles.text}>{item.text}</h1>
                    </div>
                </div>
            ))}
        </section>
    );
}
