import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, MouseEvent, useMemo } from "react";
import FsLightbox from "fslightbox-react";
import styles from "../styles/gallery.module.scss";

type GalleryProps = {
    title: string;
    section: "home" | "pools" | "roofs" | "technology";
};

export default function Gallery(props: GalleryProps) {
    const images = useMemo(() => {
        let imagesContext;
        switch (props.section) {
            case "pools":
                imagesContext = require.context(
                    "../public/images/gallery/pools",
                    true,
                    /.*/
                );
                break;
            case "roofs":
                imagesContext = require.context(
                    "../public/images/gallery/roofs",
                    true,
                    /.*/
                );
                break;
            case "technology":
                imagesContext = require.context(
                    "../public/images/gallery/technology",
                    true,
                    /.*/
                );
                break;
            default:
                imagesContext = require.context(
                    "../public/images/gallery/home",
                    true,
                    /.*/
                );
        }

        console.log("context", imagesContext?.keys());
        const images = imagesContext
            ?.keys()
            ?.filter((x) => !x.startsWith("public/"))
            ?.map(
                (name) =>
                    `/images/gallery/${props.section}/${name.replace("./", "")}`
            );
        console.log("images", images);
        return images;
    }, [props.section]);

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

    const openLightboxOnSlide = useCallback(
        (number: number) => {
            setLightboxController({
                toggler: !lightboxController.toggler,
                slide: number,
            });
        },
        [lightboxController]
    );

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
