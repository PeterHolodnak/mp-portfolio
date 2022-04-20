import styles from "../styles/hero-banner.module.scss";
import Image from "next/image";

type HeroBannerProps = {
    text: string;
    image: string;
};

export default function HeroBanner(props: HeroBannerProps) {
    return (
        <section className={styles.wrapper}>
            <div className={styles.bg}>
                <Image src={props.image} alt="" layout="fill" />
            </div>
            <div className="container">
                <div className={styles.textContainer}>
                    <h1 className={styles.text}>{props.text}</h1>
                </div>
            </div>
        </section>
    );
}
