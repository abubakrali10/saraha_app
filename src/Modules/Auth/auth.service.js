import { UserModel } from "../../DB/Models/user.model.js";

export const signup = async (req, res, next) => {
	try {
		const { firstName, lastName, email, password, gender, phoneNumber } = req.body;

		const user = await UserModel.findOne({ email });

		if (user) return res.status(409).json({ message: "User already exists!" });

		const newUser = await UserModel.create({ firstName, lastName, email, password, gender, phoneNumber });

		return res.status(201).json({ message: "User registered successfuly!", user: newUser });

	} catch (error) {
		return res.status(500).json({ message: "Something went wrong!", error: error.message });
	}
}

export const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await UserModel.findOne({ email, password });

		if (!user) return res.status(404).json({ message: "User not found!" });

		return res.status(200).json({ message: "User logged in successfuly!", user });

	} catch (error) {
		return res.status(500).json({ message: "Something went wrong!", error: error.message });
	}
}