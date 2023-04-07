import CategoryCards from "../components/category-cards";
import Contact from "../components/contact";
import HeroBanner from "../components/hero-banner";

export default function Sluzby() {
    return (
        <>
            <HeroBanner
                text="Služby"
                image="/images/gallery/pools/baz-samp.webp"
            />
            <CategoryCards
                items={[
                    {
                        title: "Servis",
                        image: "/images/gallery/pools/baz-samp.webp",
                    },
                    {
                        title: "Zazimovanie",
                        image: "/images/gallery/pools/baz-samp.webp",
                    },
                    {
                        title: "Odzimovanie",
                        image: "/images/gallery/pools/baz-samp.webp",
                    },
                    {
                        title: "Čistenie bazénov",
                        image: "/images/gallery/pools/baz-samp.webp",
                    },
                    {
                        title: "Celoročná starostlivosť o kvalitu vody",
                        image: "/images/gallery/pools/baz-samp.webp",
                    },
                ]}
            />
            <Contact />
        </>
    );
}
