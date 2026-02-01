import { mongoose, Schema } from "mongoose";

export const genderEnum = {
	male: "male",
	female: "female",
};

const userSchema = new Schema( {
	firstName: {
		type: String,
		required: true,
		trim: true,
		minLength: [3, "First name must be more than 3 characters"],
		maxLength: [20, "First name must be more than 20 characters"],
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		minLength: [3, "Last name must be more than 3 characters"],
		maxLength: [20, "Last name must be more than 20 characters"],
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		unique: true,
		trim: true,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please add a valid email",
		],
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	gender: {
		type: String,
		enum: {
			values: Object.values(genderEnum),
			message: "Gender must be either male or female",
		},
		default: genderEnum.male,
	},
	phoneNumber: {
		type: String,
		unique: true,
	},
	confirmEmail: Date,
}, { timestamps: true } );

export const UserModel = mongoose.models.User || mongoose.model("User", userSchema);