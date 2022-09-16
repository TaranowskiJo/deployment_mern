import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { getAllPets, deletePetById } from "../services/internalApiService";

const AllPets = (props) =>{
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAllPets()
            .then(data => {
                console.log(data.results)
                setPets(data.results)
            })
            .catch(error =>[
                console.log(error)
            ])
    },[])

    const handleDelete = (idToDelete) => {
        deletePetById(idToDelete)
            .then(data => {
                // There's no reason to stay on the page after the one item being viewed
                // has been deleted.
                console.log("delete and yeet")
                const filteredPets = pets.filter((pet) => {
                    return pet._id !== idToDelete
            })
            setPets(filteredPets)
            })
            .catch(err => {
                console.log(err)
            })
        }

    // console.log(pets)

    return (
        <div className="w-50 mx-auto text-center">
        <h2>All Pets</h2>

        {pets.map((pet) => {
            const { _id, name, type, description, skillOne, skillTwo, skillThree } = pet;
            return (
                <div key={_id} className="shadow mb-4 rounded border p-4">
                    <table class="table">
                    <th scope="col">Pet</th>
                    <th scope="col">Type</th>
                    <th scope="col"> Action </th>
                        <tr>
                            <td >
                                <h3>{name}</h3>
                            </td>
                            <td>
                                <p>{type}</p>
                            </td>
                            <td>
                                <Link to={`/pets/${_id}/edit`} className="btn btn-sm btn-outline-warning mx-1">
                                    EDIT 
                                </Link>
                                <Link to={`/pets/${_id}`} className="btn btn-sm btn-outline-success mx-1">
                                    View
                                </Link>
                            </td>
                        </tr>
                    </table>

                </div>
                ) } )
        }
        </div>
    )

}


export default AllPets;