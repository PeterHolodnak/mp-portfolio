"use client";

import { CookieBanner } from "@palmabit/react-cookie-law";
import ReactGA from "react-ga4";
import styles from "../styles/cookies.module.scss";

const initGa = () => {
    ReactGA.initialize("G-WJ92PSXZC7");
};

export default function Cookies() {
    return (
        <CookieBanner
            className={styles.cookieBanner}
            wholeDomain={true}
            message="Naša stránka používa cookies, aby sme vám poskytli čo najlepší zážitok. Niektoré cookies sú nevyhnutné pre správnu funkčnosť stránky, iné nám pomáhajú zlepšiť vaše používanie našich služieb a prispôsobiť obsah."
            policyLink="/cookies"
            privacyPolicyLinkText="Zásady používania cookies"
            acceptButtonText="Prijať všetky"
            declineButtonText="Odmietnuť"
            managePreferencesButtonText="Nastavenia cookies"
            savePreferencesButtonText="Uložiť vybrané"
            necessaryOptionText="Funkčné"
            preferencesOptionText="Preferenčné"
            statisticsOptionText="Štatistické"
            marketingOptionText="Marketingové"
            showStatisticsOption={true}
            statisticsDefaultChecked={true}
            showDeclineButton={true}
            onAcceptStatistics={initGa}
        />
    );
}
