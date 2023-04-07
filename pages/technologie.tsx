import CategoryCards from "../components/category-cards";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import HeroBanner from "../components/hero-banner";

export default function Technologie() {
    return (
        <>
            <HeroBanner
                text="Technológie"
                image="/images/gallery/technology/tech-8.webp"
            />
            <CategoryCards
                items={[
                    {
                        title: "Filtrácie",
                        image: "/images/gallery/technology/tech-filtr.webp",
                    },
                    {
                        title: "Tepelné čerpadlá",
                        image: "/images/gallery/technology/tech-6.webp",
                    },
                    {
                        title: "Protiprúdy",
                        image: "/images/category-cards/protiprud.webp",
                    },
                    {
                        title: "Automatické dávkovacie stanice",
                        image: "/images/category-cards/stanica.webp",
                    },
                    {
                        title: "Smart riešenia",
                        image: "/images/category-cards/smart.webp",
                    },
                    {
                        title: "Automatické vysávače",
                        image: "/images/category-cards/vysavac.webp",
                    },
                ]}
            />
            <Gallery title="Galéria" section="technology" />
            <Contact />
        </>
    );
}
