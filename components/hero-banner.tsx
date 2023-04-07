import styles from "../styles/hero-banner.module.scss";

type HeroBannerProps = {
    text: string;
    perex?: string;
    image: string;
    objectPositionX?: number;
    objectPositionY?: number;
};

export default function HeroBanner(props: HeroBannerProps) {
    return (
        <section className={styles.wrapper}>
            <div className={styles.bg}>
                <img
                    src={props.image}
                    alt=""
                    style={{
                        objectPosition: `${props.objectPositionX ?? "50"}% ${
                            props.objectPositionY ?? "50"
                        }%`,
                    }}
                />
            </div>
            <div className="container">
                <div className={styles.textContainer}>
                    <h1 className={styles.text}>{props.text}</h1>
                    <div className={styles.perex}>{props.perex}</div>
                </div>
            </div>
        </section>
    );
}
