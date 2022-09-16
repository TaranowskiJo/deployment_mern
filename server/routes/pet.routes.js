const express = require('express');
// connect these to server product.controller
//back end
const {
    createPet,
    getAllPets,
    getPetById,
    deletePetById,
    updatePetById,
} = require('../controllers/pet.controller');

const router = express.Router()


// Notice, CreateAuthor is not called now, it's called back later
// when the route is visited.
router.get('/', getAllPets);
router.post('/', createPet);
// router.post('/many', createManyPets);  //not needed for belt, but allows you to pass in multiple destinations to create at the same time

// data at the :id spot in url is accessed with req.params.id.
// route params can be named anything and the name will be added to req.params.
router.get('/:id', getPetById);
router.delete('/:id', deletePetById);
router.put('/:id', updatePetById);

module.exports = { petRouter: router };