import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Countries = () => {
    const navigate = useNavigate()
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/countries")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleNavigate = (countryName) => {
        navigate('/allSpots', { state: countryName })
    }
    return (
        <div className="max-w-6xl mx-auto cursor-pointer">
            <div className="lg:w-2/3 mx-auto text-center">
                <h1 className="text-5xl font-medium mb-3">Find Out The Best Country Choice</h1>
                <p> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="grid lg:grid-cols-3  grid-cols-1 gap-5 mt-8">
                <Fade cascade direction="right">
                    {
                        countries.map(country => <div onClick={() => handleNavigate(country?.countryName)} className="card bg-base-100 h-80 image-full shadow-xl">
                            <figure>
                                <img
                                    src={country?.imageURL}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title text-5xl text-primary">{country?.countryName}</h2>
                                <p className="flex-grow-0">{country?.description}</p>

                            </div>
                        </div>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default Countries;