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
                    <a>
                        <img
                            src="/logo.webp"
                            width={80}
                            height={34}
                            alt="Logo Minab"
                        />
                    </a>
                </Link>
                <div
                    className={`${styles.items}${
                        menuExpanded ? ` ${styles.expanded}` : ""
                    }`}
                >
                    <Link href="/bazeny">
                        <a>Bazény</a>
                    </Link>
                    <Link href="/nabytok">
                        <a>Nábytok</a>
                    </Link>
                    <Link href="/kuchyne">
                        <a>Kuchyne</a>
                    </Link>
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
