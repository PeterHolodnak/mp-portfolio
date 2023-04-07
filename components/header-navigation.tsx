import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMenuExpand } from "../hooks/use-menu-expand";
import { useMenuHidingOnScroll } from "../hooks/use-menu-hiding-on-scroll";
import styles from "../styles/header.module.scss";

export default function HeaderNavigation() {
    const { hideMenu } = useMenuHidingOnScroll();

    const { menuExpanded, handleExpandMenuClick } = useMenuExpand();

    return (
        <header
            className={`${styles.header} ${hideMenu ? styles.headerHide : ""}`}
        >
            <nav className="container">
                <Link href="/">
                    <img
                        src="/logo.webp"
                        width={100}
                        height={34}
                        alt="Logo Minab"
                    />
                </Link>
                <div
                    className={`${styles.items}${
                        menuExpanded ? ` ${styles.expanded}` : ""
                    }`}
                >
                    <Link href="/bazeny">Bazény</Link>
                    <Link href="/zastresenia">Zastrešenia</Link>
                    <Link href="/technologie">Technológie</Link>
                    <Link href="/sluzby">Služby</Link>
                    <Link href="/kontakt">Kontakt</Link>
                </div>
                <button
                    type="button"
                    className={`${styles.btn}${
                        menuExpanded ? ` ${styles.active}` : ""
                    }`}
                    onClick={handleExpandMenuClick}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </nav>
        </header>
    );
}
