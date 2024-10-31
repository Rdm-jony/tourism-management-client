import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const SpotCard = ({ card }) => {
    const { spotName, countryName, location, description, cost, season, travelTime, totalVisitors, imageURL, _id } = card;
    return (
        <div style={{ backgroundImage: `url(${imageURL})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} className="image-full  h-[500px] shadow-xl relative ">
            <div className="absolute w-full h-full bg-black bg-opacity-20 z-10"></div>
            <div className="flex flex-col justify-between h-full p-3">
                <div className="flex justify-between p-5 z-20">
                    <p className="px-3 py-2 bg-slate-200 bg-opacity-80 rounded-full">{season}</p>
                    <p className="px-3 py-2 bg-slate-200 bg-opacity-80 rounded-full">{travelTime} Days</p>
                </div>
                <div className="w-full  bg-slate-200 bg-opacity-80 z-20 p-5">
                    <div className="flex justify-between">
                        <h2 className="font-medium text-3xl text-primary">{spotName}</h2>
                        <p className="flex items-center text-xl gap-2">
                            <MdOutlineLocationOn /> {countryName}
                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <p className="text-2xl font-medium">{`\$${cost}`}</p>
                        <Link to={`/spot/${_id}`}><button className="btn bg-secondary text-neutral-50">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;