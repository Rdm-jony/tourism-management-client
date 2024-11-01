import { useEffect, useState } from "react";

import SpotCard from "../../Common/spotCard";
import { Fade } from "react-awesome-reveal";

const BestTravel = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/spots?home=true")
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto my-14">
            <div className="lg:w-2/3 mx-auto text-center">
                <h1 className="text-5xl font-medium mb-3">Find Out The Best Travel Choice</h1>
                <p> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-8">
                <Fade cascade damping={0.1} direction="left">
                    {
                        cards.map(card => <SpotCard card={card} key={card._id}></SpotCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default BestTravel;