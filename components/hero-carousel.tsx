import { useEffect, useState } from "react";
import styles from "../styles/hero-carousel.module.scss";

export default function HeroCarousel() {
    const items = [
        {
            text: "Chutnučké kuchyne",
            image: "/kitchen.webp",
        },
        {
            text: "Krásne stolíky",
            image: "/table.webp",
        },
        {
            text: "Sexy bazény",
            image: "/pool.jpg",
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
        <div className={styles.carousel}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${
                        index == activeIndex ? styles.active : ""
                    }`}
                    style={{ backgroundImage: `url("${item.image}")` }}
                >
                    <h1 className={styles.text}>{item.text}</h1>
                </div>
            ))}
        </div>
    );
}
