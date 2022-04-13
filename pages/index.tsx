import type { NextPage } from "next";
import Cards from "../components/cards";
import Gallery from "../components/gallery";
import HeroCarousel from "../components/hero-carousel";

const Home: NextPage = () => {
    return (
        <>
            <HeroCarousel />
            <Cards
                items={[
                    {
                        title: "Návrh",
                        text: "Všetko krásne navrhnem",
                        imageUrl: "/images/cards/design.png",
                    },
                    {
                        title: "Realizácia",
                        text: "Potom všetko vlastnoručne vyrobím",
                        imageUrl: "/images/cards/build.jpg",
                    },
                    {
                        title: "Údržba",
                        text: "A keby som to náhodou vyrobil zle, tak to potom opravím 🦾",
                        imageUrl: "/images/cards/maintenance.png",
                    },
                ]}
            />
            <Gallery
                title="Kukaj čo som vyrobil"
                images={[
                    "/images/carousel/kitchen.webp",
                    "/images/carousel/pool.jpg",
                    "/images/carousel/table.webp",
                ]}
            />
        </>
    );
};

export default Home;
