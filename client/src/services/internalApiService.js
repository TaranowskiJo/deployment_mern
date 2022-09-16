import axios from 'axios';
//FRONT END

// in route lets you call asynchronus functs
// Normally the url would be saved in a .env or config file that is git ignored
// so it's easy to have a different url for production.
const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});
//exporting these lets you expot a single function from this file
//calling this function bring to route and returns data
export const getAllPets = async () => {
    const res = await http.get('/pets');
    return res.data;
}

export const getPetById = async (id) => {
    const res = await http.get(`/pets/${id}`);
    console.log(id);
    return res.data;
};

export const createPet = async (data) => {
    const res = await http.post(`/pets`, data);
    return res.data;
};

export const updatePetById = async (id, data) => {
    const res = await http.put(`/pets/${id}`, data);
    return res.data;
};

export const updatePetStatusById = async (id, data) => {
    const res = await http.put(`/pets/status/${id}`, data);
    return res.data;
};

export const deletePetById = async (id) => {
    const res = await http.delete(`/pets/${id}`);
    return res.data;
};
