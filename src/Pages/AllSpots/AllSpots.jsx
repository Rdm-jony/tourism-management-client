import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import SpotCard from "../../Common/spotCard";
import { useLocation } from "react-router-dom";

const AllSpots = () => {
    const location = useLocation()
    const [allSpots, setAllSpots] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/spots?home=false&country=${location.state}`)
            .then(res => res.json())
            .then(data => setAllSpots(data))
    }, [])
    return (
        <div>
            <h2 className="text-center text-5xl relative  shortUnderline mb-5">{location.state ? location.state : "All"}<span>
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