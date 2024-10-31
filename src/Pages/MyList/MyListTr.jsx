import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListTr = ({ spot, mySpots, setMySpots }) => {
    const { spotName, countryName, location, cost, season, imageURL, _id } = spot;
    const handleDeleteSpot = () => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spot/${_id}`,
                    {
                        method: "DELETE"
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your spot has been deleted.",
                                icon: "success"
                            });

                            const remainingSpots = mySpots.filter(spot => spot._id != _id)
                            setMySpots([...remainingSpots])
                        }
                    })
            }
        });
    }
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={imageURL}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{spotName}</div>
                        <div className="text-sm opacity-50">{`${countryName},${location}`}</div>
                    </div>
                </div>
            </td>
            <td>
                {season}
            </td>
            <td>{`\$${cost}`}</td>
            <th>
                <Link to='/updateSpot' state={spot}><button className="btn bg-secondary text-neutral-50 btn-xs">Update</button>
                </Link>
            </th>
            <th>
                <button className="btn bg-error text-neutral-50 btn-xs" onClick={handleDeleteSpot}>Delete</button>
            </th>
        </tr>
    );
};

export default MyListTr;