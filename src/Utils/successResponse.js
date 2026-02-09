

export const successResponse = ({ res, statusCode = 200, message = "OK", data = {} }) => {
	return res.status(statusCode).json({ message, data });
}