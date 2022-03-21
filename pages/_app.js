import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import "../styles/globals.css";
import styles from "../styles/header.module.scss";

const Layout = ({ children }) => {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        let prevScroll = window.scrollY || document.documentElement.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;

        const checkScroll = () => {
            curScroll = window.scrollY || document.documentElement.scrollTop;
            if (curScroll > prevScroll) {
                //scrolled up
                direction = 2;
            } else if (curScroll < prevScroll) {
                //scrolled down
                direction = 1;
            }

            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }

            prevScroll = curScroll;
        };

        const toggleHeader = (direction, curScroll) => {
            if (direction === 2 && curScroll > 70) {
                setHide(true);
                prevDirection = direction;
            } else if (direction === 1) {
                setHide(false);
                prevDirection = direction;
            }
        };

        window.addEventListener("scroll", checkScroll, { passive: true });
    });

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header
                className={`${styles.header} ${hide ? styles.headerHide : ""}`}
            >
                <nav>
                    <Link href="/">
                        <a>Prehľad</a>
                    </Link>
                    <Link href="/bazeny">
                        <a>Bazény</a>
                    </Link>
                    <Link href="/nabytok">
                        <a href="/nabytok">Nábytok</a>
                    </Link>
                    <Link href="/kuchyne">
                        <a>Kuchyne</a>
                    </Link>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
