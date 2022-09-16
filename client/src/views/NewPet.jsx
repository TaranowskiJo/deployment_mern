import { useState } from "react";
import { useNavigate } from "react-router-dom"; //refrenced below in NewPet()
import { createPet } from "../services/internalApiService";
//imports the function from that file
//exports  function
export const NewPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate(); //creates navigation obj using useNav hook


    const handleNewPetSubmit = (event) => {
        event.preventDefault();

        //creates a new pet obj using state
        const newPet = {
            // name: name, is longhand but the key and var name match..
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }
    
        // passes this state info into the function createPet from intenalApiServicde
        createPet(newPet)
            //service returns only the data
            //if using axios directly, you need to use res.data
            .then((data) =>{
                console.log(`new pet data:  ${data.results}`); //when in doubt add .results or checkout console on site
                // navigate(`/pets`); //calls useNav to navigate us to this url
                if(data.results){
                    navigate(`/pets`) //calls useNav to navigate us to this url

                }
            })
            //errors may not exist, contitionally added using state
            .catch(error => {
                setErrors(error.response?.data?.errors);
                console.log(error.response)
            })
            
        };   



    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
        <h3 className="text-center">New Pet</h3>
        {/* form onSubmit function defined  above  */}

        <form
            onSubmit={(e) => {
                handleNewPetSubmit(e)
        }}>

        <div className="form-group">
                <label className="h6">Name</label>
                    <input
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value = {name}
                    />
                    { 
                        name.length == 0? <p className='text-danger'> </p> :
                        name.length < 3 ?
                            <p className='text-danger'>Must be at least 3 characters in length!</p> : null
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Type</label>
                    <textarea
                        onChange={(event) => {
                            setType(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value = {type}
                    ></textarea>
                    { 
                        type.length == 0? <p className='text-danger'> </p> :
                        type.length < 3 ?
                            <p className='text-danger'>Must be at least 3 characters in length!</p> : null
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Description</label>
                    <textarea
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value = {description}
                    ></textarea>
                    { 
                        description.length == 0? <p className='text-danger'> </p> :
                        description.length < 3 ?
                            <p className='text-danger'>Must be at least 3 characters in length!</p> : null
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Skill One</label>
                    <textarea
                        onChange={(event) => {
                            setSkillOne(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value = {skillOne}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="h6">Skill Two</label>
                    <textarea
                        onChange={(event) => {
                            setSkillTwo(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value = {skillTwo}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="h6">Skill Three</label>
                    <textarea
                        onChange={(event) => {
                            setSkillThree(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                        value = {skillThree}
                    ></textarea>
                </div>

            <button className="btn btn-sm btn-outline-success mt-3">
                Submit
            </button>

        </form>
    </div>
    )
    
} 
//exports a default
export default NewPet;
