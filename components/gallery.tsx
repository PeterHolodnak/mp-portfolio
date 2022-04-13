import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles/gallery.module.scss";

type GalleryProps = {
    title: string;
    images: string[];
};

export default function Gallery(props: GalleryProps) {
    const [emblaCarousel, embla] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;

        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;

        onSelect();
        embla.on("select", onSelect);
    }, [embla, onSelect]);

    return (
        <section className="floor">
            <div className="container">
                <h1>{props.title}</h1>
            </div>
            <div className={styles.galleryWrapper}>
                <div className={styles.embla} ref={emblaCarousel}>
                    <div className={styles.emblaContainer}>
                        {props.images.map((image, index) => (
                            <div key={index} className={styles.emblaSlide}>
                                <div className={styles.image}>
                                    <Image src={image} alt="" layout="fill" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={scrollPrev}
                    className={`${styles.button} ${styles.buttonPrev} ${
                        prevBtnEnabled ? styles.buttonEnabled : ""
                    }`}
                />
                <button
                    type="button"
                    onClick={scrollNext}
                    className={`${styles.button} ${styles.buttonNext} ${
                        nextBtnEnabled ? styles.buttonEnabled : ""
                    }`}
                />
            </div>
        </section>
    );
}
