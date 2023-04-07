import CategoryCards from "../components/category-cards";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import HeroBanner from "../components/hero-banner";

export default function Bazeny() {
    return (
        <>
            <HeroBanner
                text="Bazény na mieru"
                image="/images/banners/pool.webp"
                objectPositionY={40}
            />
            <CategoryCards
                items={[
                    {
                        title: "Betónové bazény",
                        image: "/images/gallery/pools/baz-8.webp",
                        items: [
                            "Dlhá životnosť",
                            "Jednoduchá výmena fólie",
                            "Nekonečné možnosti realizácie",
                        ],
                    },
                    {
                        title: "Sklolaminátové bazény",
                        image: "/images/gallery/pools/baz-sklo.webp",
                    },
                    {
                        title: "Keramické bazény",
                        image: "/images/category-cards/baz-keramicky.webp",
                        items: [
                            "Dlhá životnosť",
                            "Jednoduchá údržba",
                            "Krásne 3D farby",
                        ],
                    },
                ]}
            />
            <Gallery title="Galéria" section="pools" />
            <Contact />
        </>
    );
}
