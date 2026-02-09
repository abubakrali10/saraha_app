import { UserModel } from "../../DB/Models/user.model.js";

export const signup = async (req, res, next) => {
	const { firstName, lastName, email, password, gender, phoneNumber } = req.body;

	const user = await UserModel.findOne({ email });

	if (user) return next(new Error("User already exists!"), { cause: 409});

	const newUser = await UserModel.create({ firstName, lastName, email, password, gender, phoneNumber });

	return res.status(201).json({ message: "User registered successfuly!", user: newUser });
};

export const login = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await UserModel.findOne({ email, password });
	user = 10;
	if (!user) return next(new Error("User not found!", { cause: 404 }));

	return res.status(200).json({ message: "User logged in successfuly!", user });

};