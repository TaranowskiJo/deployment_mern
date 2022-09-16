const { default: mongoose } = require("mongoose")

const PetSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, `is required`],
        minlength: [3, `name must be at least 3 characters.`]
    },
    type: {
        type: String,
        required: [true, `is required`],
        minlength: [3, `name must be at least 3 characters.`]
    },
    description: {
        type: String,
        required: [true, `is required`],
        minlength: [3, `name must be at least 3 characters.`]
    },
    skillOne: {
        type: String,
        required: false,
    },
    skillTwo: {
        type: String,
        required: false,
    },
    skillThree: {
        type: String,
        required: false,
    },
    
    },  {timestamps: true}
);

const Pet = mongoose.model('Pet', PetSchema);//(table name, instructions)

module.exports = Pet;