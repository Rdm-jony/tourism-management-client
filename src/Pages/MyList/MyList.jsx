import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyListTr from "./myListTr";

const MyList = () => {
    const { user } = useContext(AuthContext)
    const [mySpots, setMySpots] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/spots/my/${user?.email}`)
            .then(res => res.json())
            .then(data => setMySpots(data))
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="table">
                    <tbody>
                        {
                            mySpots.map(spot => <MyListTr
                                key={spot._id}
                                mySpots={mySpots}
                                setMySpots={setMySpots}
                                spot={spot}></MyListTr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;