import CategoryCards from "../components/category-cards";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import HeroBanner from "../components/hero-banner";

export default function Bazeny() {
    return (
        <>
            <HeroBanner
                text="Kuchyne kde nikto neostane hladný"
                image="/images/banners/kitchen.webp"
            />
            <CategoryCards
                items={[
                    {
                        title: "Kuchynské linky",
                        image: "/images/category-cards/kitchen.webp",
                    },
                    {
                        title: "Kuchynské skrinky",
                        image: "/images/category-cards/kitchen.webp",
                    },
                    {
                        title: "Kuchynské umývadlá",
                        image: "/images/category-cards/kitchen.webp",
                    },
                    {
                        title: "Kuchynské dvierka",
                        image: "/images/category-cards/kitchen.webp",
                    },
                    {
                        title: "Kuchynské príbory",
                        image: "/images/category-cards/kitchen.webp",
                    },
                    {
                        title: "Kuchynské varechy",
                        image: "/images/category-cards/kitchen.webp",
                    },
                ]}
            />
            <Gallery title="Hriech v nich nevariť" section="kitchen" />
            <Contact />
        </>
    );
}
