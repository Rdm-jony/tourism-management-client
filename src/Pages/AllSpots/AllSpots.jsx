import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import SpotCard from "../../Common/spotCard";

const AllSpots = () => {
    const [allSpots, setAllSpots] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/spots?home=false")
            .then(res => res.json())
            .then(data => setAllSpots(data))
    }, [])
    return (
        <div>
            <h2 className="text-center text-5xl relative  shortUnderline mb-5">All <span>
                <Typewriter
                    words={['Turists Spot']}
                >
                </Typewriter>
            </span></h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    allSpots.map(card => <SpotCard card={card} key={card._id}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpots;