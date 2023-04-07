import styles from "../styles/contact.module.scss";

export default function Contact() {
    const mail = "info@bazeny-minab.sk";
    const phone = "+421 908 468 900";
    const facebook = "bazenyMINAB";
    return (
        <section className="container floor">
            <div className={styles.contact}>
                <div>
                    <h1>Kontakt</h1>
                    <div className={styles.rowFlex}>
                        <img
                            src="/images/icons/mail.png"
                            alt="Mail"
                            width="50"
                            height="50"
                        />
                        <a href={`mailto: ${mail}`}>{mail}</a>
                    </div>
                    <div className={styles.rowFlex}>
                        <img
                            src="/images/icons/phone.png"
                            alt="Telefón"
                            width="50"
                            height="50"
                        />
                        <a href={`tel: ${phone.replace(/\s/g, "")}`}>{phone}</a>
                    </div>
                    <div className={styles.rowFlex}>
                        <img
                            src="/images/icons/facebook.png"
                            alt="Facebook"
                            width="50"
                            height="50"
                        />
                        <a href={`https://www.facebook.com/${facebook}`}>
                            {facebook}
                        </a>
                    </div>
                </div>
                <div>
                    <h1>Fakturačné údaje</h1>
                    <div className={styles.row}>
                        <div className={styles.title}>Názov firmy</div>
                        <div>Michal Palenčar - MINAB</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>IČO</div>
                        <div>53614461</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>IČ DPH</div>
                        <div>SK1080077746</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>Sídlo</div>
                        <div>Ľubovec 94, 08242</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
