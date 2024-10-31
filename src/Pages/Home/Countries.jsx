import { useEffect, useState } from "react";
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
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-5">
                {
                    countries.map(country => <div onClick={() => handleNavigate(country?.countryName)} className="card bg-base-100 image-full shadow-xl">
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
            </div>
        </div>
    );
};

export default Countries;