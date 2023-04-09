import Cards from "../components/cards";
import Contact from "../components/contact";
import HeroBanner from "../components/hero-banner";

export default function Sluzby() {
    return (
        <>
            <HeroBanner
                text="Služby"
                image="/images/gallery/roofs/uni-2.webp"
                objectPositionY={65}
                negativeMargin={false}
            />
            <Cards
                items={[
                    {
                        title: "Servis",
                        imageUrl: "/images/cards/maintenance.png",
                    },
                    {
                        title: "Zazimovanie",
                        imageUrl: "/images/cards/winter.svg",
                    },
                    {
                        title: "Odzimovanie",
                        imageUrl: "/images/cards/summer.svg",
                    },
                    {
                        title: "Čistenie bazénov",
                        imageUrl: "/images/cards/cleaning.svg",
                    },
                    {
                        title: "Celoročná starostlivosť o kvalitu vody",
                        imageUrl: "/images/cards/water.svg",
                    },
                ]}
            />
            <Contact />
        </>
    );
}
