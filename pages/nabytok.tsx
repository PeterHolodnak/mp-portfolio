import CategoryCards from "../components/category-cards";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import HeroBanner from "../components/hero-banner";

export default function Nábytok() {
    return (
        <>
            <HeroBanner
                text="Nabytok z dreva a rohu jednorozča"
                image="/images/banners/table.webp"
            />
            <CategoryCards
                items={[
                    {
                        title: "Interiér",
                        image: "/images/category-cards/kitchen.webp",
                        items: [
                            "Vstavaný nábytok",
                            "Kuchynské linky",
                            "Určite nie zárubne",
                            "A už vôbec nie dvere",
                        ],
                    },
                    {
                        title: "Exteriér",
                        image: "/images/category-cards/pool.jpg",
                        items: ["Terasy", "Záhradný nábytok"],
                    },
                    {
                        title: "Izby",
                        image: "/images/category-cards/table.webp",
                        items: [
                            "Postele",
                            "Nočné stolíky",
                            "Denné stolíky",
                            "Možno ranné stolíky",
                        ],
                    },
                ]}
            />
            <Gallery title="Najviac krásny nabytok" section="furniture" />
            <Contact />
        </>
    );
}
