import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/saraha", {
			serverSelectionTimeoutMS: 5000
		});
		console.log("Connected to DB");
	} catch {
		console.log("Error connecting to DB");
	}
}

export default connectDB;