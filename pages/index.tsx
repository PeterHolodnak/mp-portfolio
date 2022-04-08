import type { NextPage } from "next";
import Cards from "../components/cards";
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
        </>
    );
};

export default Home;
