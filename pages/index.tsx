import type { NextPage } from "next";
import Cards from "../components/cards";
import Contact from "../components/contact";
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
                    "/images/gallery/1.jpg",
                    "/images/gallery/2.jpg",
                    "/images/gallery/3.jpg",
                    "/images/gallery/4.jpg",
                    "/images/gallery/5.jpg",
                    "/images/gallery/6.jpg",
                ]}
            />
            <Contact />
        </>
    );
};

export default Home;
