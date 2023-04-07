import CategoryCards from "../components/category-cards";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import HeroBanner from "../components/hero-banner";

export default function Zastresenia() {
    return (
        <>
            <HeroBanner
                text="Zastrešenia"
                image="/images/gallery/roofs/flat-1.webp"
                perex="Teplá voda po celý rok"
            />
            <CategoryCards
                items={[
                    {
                        title: "Angle",
                        image: "/images/gallery/roofs/angle-1.webp",
                    },
                    {
                        title: "Flat",
                        image: "/images/gallery/roofs/flat-1.webp",
                    },
                    {
                        title: "Uni",
                        image: "/images/gallery/roofs/uni-1.webp",
                    },
                ]}
            />
            <Gallery title="Galéria" section="roofs" />
            <Contact />
        </>
    );
}
