import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { 
        getPetById, 
        deletePetById 
    } from '../services/internalApiService';


const OnePet = (props) => {
    const { id } = useParams(); //pulls id out of the parameters
    const [pet, setPet] = useState(null);

    const navigate = useNavigate(); //creates navigation obj using useNav hook

    // console.log(id);
    
    useEffect(() => {
        getPetById(id) //takes id from parameters above
            .then(data => {
                console.log("data is", data)
                setPet(data.results)
            })
            .catch(err =>{
                console.log(err)
            })
        },[id])

        const handleDelete = () => {
            deletePetById(id)
                .then(data => {
                // There's no reason to stay on the page after the one item being viewed
                // has been deleted.
                console.log("edit")
                navigate("/pets")
            })
            .catch(err => {
                console.log(err)
            })
        }

        if(pet === null){
            return <h2> dis bitch empty. yeet</h2>
        }

    //destructuring  pulls name and price  and stores 
    //so that lines 32,33 don''t have to be pet.name,pet.price
    const {  name, type, description, skillOne, skillTwo, skillThree } = pet;

    return (
        <div className="w-50 mx-auto shadow mb-4 rounded border p-4 text-center">
            <h1>Details about: {name} </h1>
            <h3>Type: {type}</h3>
            <h3>Description: {description}</h3>
            <h4>Skills:</h4>
                <p>{skillOne}</p>
                <p>{skillTwo}</p>
                <p>{skillThree}</p>

            <button onClick={handleDelete}>
                Adopt
            </button>

        </div>
        
        )

}
//ONLY 1 Defaul per file
export default OnePet;