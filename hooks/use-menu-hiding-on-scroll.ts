import { useEffect, useState } from "react";

export function useMenuHidingOnScroll() {
    const [hideMenu, setHideMenu] = useState(false);

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

        const toggleHeader = (direction: number, curScroll: number) => {
            if (direction === 2 && curScroll > 70) {
                setHideMenu(true);
                prevDirection = direction;
            } else if (direction === 1) {
                setHideMenu(false);
                prevDirection = direction;
            }
        };

        window.addEventListener("scroll", checkScroll, { passive: true });
    }, []);

    return {
        hideMenu,
    };
}
