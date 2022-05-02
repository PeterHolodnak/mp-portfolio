import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function useMenuExpand() {
    const [menuExpanded, setMenuExpanded] = useState(false);
    const handleExpandMenuClick = () => {
        setMenuExpanded(!menuExpanded);
    };
    const router = useRouter();
    useEffect(() => {
        const handler = () => {
            setMenuExpanded(false);
        };
        router?.events?.on("routeChangeStart", handler);
    }, []);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => {
                if (menuExpanded && window.matchMedia("min-width: 920px")) {
                    setMenuExpanded(false);
                }
            },
            { passive: true }
        );
    });

    return {
        menuExpanded,
        handleExpandMenuClick,
    };
}
