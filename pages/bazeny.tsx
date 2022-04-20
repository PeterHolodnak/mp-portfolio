import CategoryCards from "../components/category-cards";
import HeroBanner from "../components/hero-banner";

export default function Bazeny() {
    return (
        <>
            <HeroBanner
                text="Stavané bazény a údržba"
                image="/images/banners/pool.jpg"
            />
            <CategoryCards
                items={[
                    {
                        title: "Montáž",
                        image: "/images/category-cards/kitchen.webp",
                        items: ["Vykopem", "Donesiem", "Zmontujem", "Postavím"],
                    },
                    {
                        title: "Údržba a servis",
                        image: "/images/category-cards/pool.jpg",
                        items: ["Udržím", "Zoservisujem"],
                    },
                    {
                        title: "Montáž technológií",
                        image: "/images/category-cards/table.webp",
                        items: ["Donesiem", "Zmontujem", "Zapojím"],
                    },
                ]}
            />
        </>
    );
}
