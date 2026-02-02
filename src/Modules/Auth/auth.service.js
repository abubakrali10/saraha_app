import { UserModel } from "../../DB/Models/user.model.js";
import { asyncHandler } from "../../Utils/asyncHandler.js";

export const signup = asyncHandler(async (req, res, next) => {
	const { firstName, lastName, email, password, gender, phoneNumber } = req.body;

	const user = await UserModel.findOne({ email });

	if (user) return res.status(409).json({ message: "User already exists!" });

	const newUser = await UserModel.create({ firstName, lastName, email, password, gender, phoneNumber });

	return res.status(201).json({ message: "User registered successfuly!", user: newUser });
});

export const login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	const user = await UserModel.findOne({ email, password });

	if (!user) return res.status(404).json({ message: "User not found!" });

	return res.status(200).json({ message: "User logged in successfuly!", user });

});