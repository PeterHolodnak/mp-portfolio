import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState, MouseEvent } from "react";
import FsLightbox from "fslightbox-react";

import styles from "../styles/gallery.module.scss";

type GalleryProps = {
    title: string;
};

export default function Gallery(props: GalleryProps) {
    const images = require
        .context("../public/images/gallery", true, /.*/)
        ?.keys()
        ?.map((name) => `/images/gallery/${name.replace("./", "")}`);

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

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    function openLightboxOnSlide(number: number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        });
    }

    const [mouseDownPosition, setMouseDownPosition] = useState(0);

    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        setMouseDownPosition(event.clientX);
    };

    const handleMouseUp = (event: MouseEvent, index: number) => {
        if (event.clientX !== mouseDownPosition) return;

        openLightboxOnSlide(index);
    };

    return (
        <section className="floor">
            <div className="container">
                <h1>{props.title}</h1>
            </div>

            <div className={styles.galleryWrapper}>
                <div className={styles.embla} ref={emblaCarousel}>
                    <div className={styles.emblaContainer}>
                        {images.map((image, index) => (
                            <div key={index} className={styles.emblaSlide}>
                                <div
                                    onMouseDown={(event) =>
                                        handleMouseDown(event)
                                    }
                                    onMouseUp={(event) =>
                                        handleMouseUp(event, index + 1)
                                    }
                                    className={styles.image}
                                >
                                    <img src={image} alt="" />
                                    {/* <Image src={image} alt="" layout="fill" /> */}
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

            <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={images}
            />
        </section>
    );
}
