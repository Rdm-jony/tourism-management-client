import { Typewriter } from 'react-simple-typewriter';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
const UpdateSpot = () => {
    const { user } = useContext(AuthContext)
    const oldData = useLocation().state;
    console.log(oldData)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const imageURL = form.imageURL.value;
        const newSpot = { spotName, countryName, location, description, cost, season, travelTime, totalVisitors, imageURL, email: user?.email, userName: user?.displayName }

        // send data
        fetch(`http://localhost:5000/spot/${oldData._id}`,
            {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newSpot)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Update this spot! ',
                        icon: 'success',
                        confirmButtonText: 'continue'
                    })
                    form.reset()
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full  shadow-2xl">
                    <form onSubmit={handleOnSubmit} className="card-body grid grid-cols-2 bg-primary bg-opacity-5">
                        <h2 className="col-span-2 text-center text-5xl relative  shortUnderline mb-5">Update <span>
                            <Typewriter
                                words={['Turists Spot']}
                            >
                            </Typewriter>

                        </span></h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Turists Spot Name</span>
                            </label>
                            <input type="text" name='spotName' defaultValue={oldData?.spotName} placeholder="Turists Spot Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input defaultValue={oldData?.countryName} type="text" name='countryName' placeholder="Country Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name='location' defaultValue={oldData?.location} placeholder="Location" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" defaultValue={oldData?.description} name='description' placeholder="Short Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="number" name='cost' defaultValue={oldData?.cost} placeholder="Average Cost" className="input input-bordered" required />

                        </div>
                        <div className='Select Season'>
                            <label className="label">
                                <span className="label-text">Select Season</span>
                            </label>
                            <select name='season' defaultValue={oldData?.season} className="select select-bordered w-full">
                                <option value={"spring"}>Spring</option>
                                <option value={"summer"}>Summer</option>
                                <option value={"autumn"}>Autumn</option>
                                <option value={"winter"}>Winter</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="number" name='travelTime' defaultValue={oldData?.travelTime} placeholder="Travel Time" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Vistors Per Year</span>
                            </label>
                            <input type="number" name='totalVisitors' defaultValue={oldData?.totalVisitors} placeholder="Total Vistors Per Year" className="input input-bordered" required />

                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='imageURL' defaultValue={oldData?.imageURL} placeholder="Image URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control col-span-2 mt-6">
                            <button className="btn bg-secondary w-full btn-primary">Add Spot</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateSpot;