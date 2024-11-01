import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import SpotCard from "../../Common/spotCard";
import { useLocation } from "react-router-dom";
import Loading from "../../Common/Loading";

const AllSpots = () => {
    const location = useLocation()
    const [allSpots, setAllSpots] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:5000/spots?home=false&country=${location.state}`)
            .then(res => res.json())
            .then(data => setAllSpots(data))
        setLoading(false)
    }, [])
    return (
        <div>
            {
                loading ? <Loading></Loading> : <div>
                    <h2 className="text-center text-5xl relative  shortUnderline mb-5 mt-8">{location.state ? location.state : "All"}<span>
                        <Typewriter
                            words={['Turists Spot']}
                        >
                        </Typewriter>
                    </span></h2>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-8">
                        {
                            allSpots.map(card => <SpotCard card={card} key={card._id}></SpotCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AllSpots;