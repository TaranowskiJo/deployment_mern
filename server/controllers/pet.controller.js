const { response, request } = require("express")

const  Pet  = require("../models/pet.model")

module.exports.getAllPets = (req, res )=>{
    Pet.find()
        .sort({'type':1}) //sorts alphabetically
        .then(allPets => {
            res.json({results: allPets});
        })
        .catch(err=>{
            res.json(err);
        })
}
//params hold id
module.exports.getPetById = (req, res )=>{
    Pet.findById(req.params.id)
        .then(aPets => {
            console.log(res)
            res.json({results: aPets});
        })
        .catch(err=>{
            res.json(err);
        })
}

module.exports.createPet = (req,res) =>{
    Pet.create(req.body)
        .then(newPet=>{
            res.json({results: newPet})
        })
        .catch(err=>{
            res.json(err)
        })
    }

module.exports.updatePetById = (req, res) =>{
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new:true, runValidators: true}
    )
        .then(updatedPet =>{
            res.json({results:updatedPet})
        })
        .catch(err=>{
            res.json(err)
        })
}

// module.exports.updatePetById = (req, res) =>{
//     Pet.findOneAndUpdate(
//         {_id: req.params.id},
//         req.body,
//         { new:true, runValidators: true}
//     )
//         .then(updatedPet =>{
//             res.json({results:updatedPet})
//         })
//         .catch(err=>{
//             res.json(err)
//         })
// }

module.exports.deletePetById = (req, res)=>{
    Pet.deleteOne({_id: req.params.id})
        .then(product =>{
            res.json({results: pet})
        })
        .catch(err=>{
            res.json(err)
        })
}