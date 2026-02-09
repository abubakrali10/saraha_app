import { UserModel } from "../../DB/Models/user.model.js";
import { successResponse } from "../../Utils/successResponse.js";

export const signup = async (req, res, next) => {
	const { firstName, lastName, email, password, gender, phoneNumber } = req.body;

	const user = await UserModel.findOne({ email });

	if (user) return next(new Error("User already exists!"), { cause: 409});

	const newUser = await UserModel.create({ firstName, lastName, email, password, gender, phoneNumber });

	return successResponse({
		res,
		statusCode: 201,
		message: "User created successfuly!",
		data: { user: newUser },
	});
};

export const login = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await UserModel.findOne({ email, password });

	if (!user) return next(new Error("User not found!", { cause: 404 }));

	return successResponse({
		res,
		statusCode: 200,
		message: "User logged in successfuly!",
		data: { user },
	});

};