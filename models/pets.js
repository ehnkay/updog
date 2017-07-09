const mongoose = require("mongoose");
// capital letter usually means it's a constructor; need to put the keyword "new" before when updating the constructor
const Schema = mongoose.Schema;

const petSchema = new Schema({
	name: String,
	photo: String,
	description: {
		type: String,
		default: ""
	},
	score: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model("Pet", petSchema);