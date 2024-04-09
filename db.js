// db.js
const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

const ConnectToMongo = async () => {
	try {
		await mongoose.connect(MONGO_URL, {
			useNewUrlParser: true,
			// useCreateIndex: true,
			useUnifiedTopology: true,
			// useFindAndModify: false,
		});
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		// Optionally, you can rethrow the error to let the calling code handle it
		throw error;
	}
};

module.exports = ConnectToMongo;
