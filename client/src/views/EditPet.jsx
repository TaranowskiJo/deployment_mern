import { useState, useEffect } from "react"; //use effect allows for prepopulated data
import { useNavigate, useParams } from "react-router-dom"; //refrenced below 
import { 
        getPetById, 
        updatePetById 
    } from "../services/internalApiService";
//imports the function from that file
//exports  function
export const EditPet = (props) => {
    //url route param matching 'id'
    const { id } = useParams();
    const navigate = useNavigate(); //creates navigation obj using useNav hook

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getPetById(id) //takes id from parameters above
        .then((data) => {
                const { name, type, description, skillOne, skillTwo, skillThree } = data.results; //destructuring following set lines
                console.log("data is", data.results)
                setName(name);
                setType(type);
                setDescription(description);
                setSkillOne(skillOne);
                setSkillTwo(skillTwo);
                setSkillThree(skillThree);
            })
            .catch(err =>{
                console.log(err)
            });
        },[id]);

    const handleUpdatePetById = (event) => {
        event.preventDefault();
        //creates a new pet obj using state
        // name: name, is longhand but the key and var name match..
        const updatedPet = {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        };

        updatePetById(id, updatedPet)
            .then((data) => {
                console.log(`updated pet data: ${data}`);
                navigate(`/pets/${data.results._id}`) //calls useNav to navigate us to this url
            })
            .catch(error => {
                setErrors(error.response?.data?.errors);
                console.log(error.response)
            })
        };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">Update Pet {name} </h3>
            {/* form onSubmit function defined  above  */}
            <form
                onSubmit={(e) => {
                    handleUpdatePetById(e)
                }}
            >
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
export default EditPet;
