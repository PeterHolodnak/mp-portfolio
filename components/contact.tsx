import styles from "../styles/contact.module.scss";
import Image from "next/image";

type CardProps = {
    title: string;
    text: string;
    imageUrl: string;
};

export default function Contact() {
    const mail = "mail@mail.mail";
    const phone = "+4219 123 456 789";
    const facebook = "somefb";
    return (
        <section className="container floor">
            <div className={styles.contact}>
                <div></div>
                <div>
                    <h1>Kontakt</h1>
                    <div className={styles.contactRow}>
                        <Image
                            src="/images/icons/mail.png"
                            alt="Mail"
                            width="50"
                            height="50"
                        />
                        <a href={`mailto: ${mail}`}>{mail}</a>
                    </div>
                    <div className={styles.contactRow}>
                        <Image
                            src="/images/icons/phone.png"
                            alt="Telefon"
                            width="50"
                            height="50"
                        />
                        <a href={`tel: ${phone.replaceAll(" ", "")}`}>
                            {phone}
                        </a>
                    </div>
                    <div className={styles.contactRow}>
                        <Image
                            src="/images/icons/facebook.png"
                            alt="Facebook"
                            width="50"
                            height="50"
                        />
                        <a href={`https://www.facebook.com/${mail}`}>
                            {facebook}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
