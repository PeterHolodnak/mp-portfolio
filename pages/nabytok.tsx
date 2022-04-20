import CategoryCards from "../components/category-cards";

export default function Nábytok() {
    return (
        <div>
            <div>Nábytok na mieru</div>
            <div>Chodbové zostavy</div>
            <div>Kuchyne</div>
            <div>Vstavaný nábytok</div>
            <br />
            <br />
            <CategoryCards
                items={[
                    {
                        title: "Interiér",
                        image: "/images/category-cards/kitchen.webp",
                        items: [
                            "Vstavaný nábytok",
                            "Kuchynské linky",
                            "Určite nie zárubne",
                            "A už vôbec nie dvere",
                        ],
                    },
                    {
                        title: "Exteriér",
                        image: "/images/category-cards/pool.jpg",
                        items: ["Terasy", "Záhradný nábytok"],
                    },
                    {
                        title: "Izby",
                        image: "/images/category-cards/table.webp",
                        items: [
                            "Postele",
                            "Nočné stolíky",
                            "Denné stolíky",
                            "Možno ranné stolíky",
                        ],
                    },
                ]}
            />
        </div>
    );
}
