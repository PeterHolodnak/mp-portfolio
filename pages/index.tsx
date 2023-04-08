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
                        title: "Konzultácie",
                        text: "Priamo u Vás doma, vrátane zamerania",
                        imageUrl: "/images/cards/ruler.svg",
                    },
                    {
                        title: "Cenová ponuka",
                        text: "Šitá na mieru Vašim potrebám",
                        imageUrl: "/images/cards/price.svg",
                    },
                    {
                        title: "Realizácia a montáž",
                        text: "Na kľúč od A do Z",
                        imageUrl: "/images/cards/build.jpg",
                    },
                    {
                        title: "Servis a údržba",
                        text: "Čistá voda po celú sezónu",
                        imageUrl: "/images/cards/maintenance.png",
                    },
                ]}
            />
            <Gallery title="Referencie" section="home" />
            <Contact />
        </>
    );
};

export default Home;
