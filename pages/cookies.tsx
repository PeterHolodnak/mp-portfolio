import type { NextPage } from "next";
import React from "react";
import styles from "../styles/cookies.module.scss";
import Link from "next/link";

const removeConsent = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    document.cookie =
        "rcl_consent_given=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.reload();
};

const CookiePage: NextPage = () => {
    return (
        <section className={`container floor ${styles.cookies}`}>
            <h1>Zásady používania cookies</h1>

            <p>
                Táto stránka používa cookies na zlepšenie užívateľskej
                skúsenosti, analýzu návštevnosti a poskytovanie prispôsobeného
                obsahu. V tejto politike sa dozviete, aké typy cookies
                používame, ako ich využívame a ako môžete spravovať svoje
                nastavenia cookies.
            </p>

            <h2>Čo sú cookies?</h2>
            <p>
                Cookies sú malé textové súbory, ktoré sú uložené vo vašom
                zariadení, keď navštívite webovú stránku. Tieto súbory môžu
                obsahovať rôzne informácie, ako napríklad preferencie
                používateľov, historické údaje o používaní webu alebo iné
                informácie, ktoré nám pomáhajú zlepšiť našu stránku a služby.
            </p>

            <h2>Aké cookies používame?</h2>
            <p>Naša stránka používa nasledujúce typy cookies:</p>
            <ul>
                <li>
                    <strong>Funkčné cookies:</strong> Tieto cookies sú
                    nevyhnutné na zabezpečenie základnej funkčnosti webovej
                    stránky, ako je navigácia, prihlásenie alebo prístup k
                    bezpečným oblastiam webu. Bez týchto cookies by niektoré
                    funkcie webu nefungovali.
                </li>
                <li>
                    <strong>Štatistické cookies:</strong> Tieto cookies
                    zhromažďujú anonymné informácie o tom, ako návštevníci
                    používajú našu stránku, napríklad ktoré stránky sú najviac
                    navštevované alebo aké chyby sa vyskytujú. Tieto informácie
                    nám pomáhajú zlepšiť výkon našich služieb. Nezhromažďujú
                    osobné údaje.
                </li>
                <li>
                    <strong>Preferenčné cookies:</strong> Tieto cookies umožňujú
                    stránke zapamätať si vaše voľby (ako je jazyk alebo región)
                    a poskytovať vylepšené a personalizované funkcie. Tieto
                    cookies môžu byť použité aj na zapamätanie vašich nastavení
                    a preferencií pre ďalšie návštevy.
                </li>
                <li>
                    <strong>Marketingové cookies:</strong> Tieto cookies sa
                    používajú na zobrazovanie personalizovaných reklám podľa
                    vašich záujmov. Môžu tiež slúžiť na sledovanie vašich
                    aktivít na viacerých stránkach a na poskytovanie
                    relevantných reklám. Naša stránka používa Google Analytics 4
                    (GA4), ktorý zbiera anonymné informácie o interakciách
                    používateľov s webom a slúži na analýzu a zlepšenie
                    užívateľskej skúsenosti.
                </li>
            </ul>

            <h2>Google Analytics 4 (GA4)</h2>
            <p>
                Naša stránka využíva <strong>Google Analytics 4</strong> (GA4),
                ktorý zhromažďuje a analyzuje údaje o návštevnosti a správaní
                používateľov na našich stránkach. GA4 nám poskytuje informácie o
                tom, ako používatelia interagujú s našimi stránkami, aké stránky
                navštevujú a ako sa pohybujú po našom webe.
            </p>
            <p>GA4 využíva cookies, ktoré nám umožňujú:</p>
            <ul>
                <li>
                    Sledovať a analyzovať správanie používateľov na našich
                    stránkach.
                </li>
                <li>
                    Získať štatistické údaje o tom, ako návštevníci používajú
                    našu stránku, čo nám pomáha optimalizovať naše služby.
                </li>
                <li>
                    Personalizovať obsah a reklamu, ktoré vám zobrazuje, na
                    základe vašich predchádzajúcich interakcií so stránkou.
                </li>
            </ul>
            <p>
                Všetky údaje, ktoré GA4 zhromažďuje, sú anonymné a nepoužívame
                ich na identifikáciu jednotlivcov. Viac informácií o Google
                Analytics nájdete v{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    zásadách ochrany osobných údajov Google
                </a>
                .
            </p>

            <h2>Aké môžete spravovať cookies?</h2>
            <p>
                Keď navštívite našu stránku, budete mať možnosť vybrať, ktoré
                cookies chcete povoliť alebo zablokovať. Môžete upraviť svoje
                nastavenia cookies kedykoľvek kliknutím na odkaz:{" "}
                <Link href="/cookies" onClick={removeConsent}>
                    Nastavenia cookies
                </Link>
                .
            </p>
            <p>
                Okrem toho môžete spravovať cookies aj priamo cez nastavenia
                svojho prehliadača. Väčšina webových prehliadačov vám umožňuje
                blokovať alebo odstraňovať cookies podľa vašich preferencií.
                Viac informácií o správe cookies nájdete v dokumentácii svojho
                prehliadača.
            </p>
            <ul>
                <li>
                    <a
                        href="https://support.google.com/chrome/answer/95647?hl=sk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Správa cookies v Chrome
                    </a>
                </li>
                <li>
                    <a
                        href="https://support.apple.com/sk-sk/guide/safari/sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Správa cookies v Safari
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default CookiePage;
