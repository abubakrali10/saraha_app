import authRouter from "./Modules/Auth/auth.controller.js";
import userRouter from "./Modules/User/user.controller.js";
import messageRouter from "./Modules/Message/message.controller.js";
import connectDB from "./DB/connection.js";

const bootstrap = async (app, express) => {
	app.use(express.json());

	await connectDB();

	app.use("/api/auth", authRouter);
	app.use("/api/user", userRouter);
	app.use("/api/message", messageRouter);

	app.all("/*dummy", (req, res) => {
		return res.status(404).json({ message: "Not found" });
	});
}

export default bootstrap;