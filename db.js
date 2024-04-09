// db.js
const mongoose = require("mongoose");

const ConnectToMongo = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://ashakanishq77:yxT0HdFDDJIiwZhg@cluster0.psdnbj1.mongodb.net/inotes?retryWrites=true&w=majority&appName=Cluster0",
			{
				useNewUrlParser: true,
				// useCreateIndex: true,
				useUnifiedTopology: true,
				// useFindAndModify: false,
			}
		);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		// Optionally, you can rethrow the error to let the calling code handle it
		throw error;
	}
};

module.exports = ConnectToMongo;
