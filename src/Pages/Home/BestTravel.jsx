import { useEffect, useState } from "react";
import SpotCard from "../../Common/spotCard";

const BestTravel = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/spots?home=true")
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-5">
                {
                    cards.map(card => <SpotCard card={card} key={card._id}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default BestTravel;