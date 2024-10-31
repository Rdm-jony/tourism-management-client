import { MdOutlineLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const data = useLoaderData()
    const { spotName, countryName, location, description, cost, season, travelTime, totalVisitors, imageURL, _id } = data;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-6xl mx-auto mt-10">
                <figure className="w-2/3">
                    <img className="w-full h-full"

                        src={imageURL}
                        alt="Album" />
                </figure>
                <div className="px-10 py-5 space-y-4">
                    <h2 className="text-5xl">{spotName}</h2>
                    <p className="flex items-center text-xl">
                        <MdOutlineLocationOn />
                        <span>{`${location},${countryName}`}</span>
                    </p>
                    <hr />
                    <p>{description}</p>

                    <div className="flex justify-between items-center ">
                        <div className="space-y-2">
                            <p className="text-xl font-medium">Seasonality :</p>
                            <p className="text-xl font-medium">Travel time :</p>
                            <p className="text-xl font-medium">Total Visitors Per Year :</p>
                            <p className="text-xl font-medium">Average Cost:</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xl">{season}</p>
                            <p className="text-xl">{travelTime} Days</p>
                            <p className="text-xl">{totalVisitors} like</p>
                            <p className="text-xl">{`\$${cost}`}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-secondary text-neutral-50">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;