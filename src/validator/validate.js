let yup = require("yup");

const regisCheck = async (req, res, next) => {
	try {
		const schema = yup.object({
			Users: yup.array().required().min(1).of(yup.string().email()),
		});
		await schema.validate(req.body);
		next();
	} catch (err) {
		return res.status(400).json({ status: err.name, message: err.errors });
	}
};
const assignCheck = async (req, res, next) => {
	try {
		const schema = yup.object({
			user: yup.string().required().email(),
			tasks: yup.array().required().min(1).of(yup.string().min(5)),
		});
		await schema.validate(req.body);
		next();
	} catch (err) {
		return res.status(400).json({ status: err.name, message: err.errors });
	}
};
const getCheck = async (req, res, next) => {
	try {
		const schema = yup.object({
			user: yup.array().required().min(1).of(yup.string().email()),
		});
		await schema.validate(req.body);
		next();
	} catch (err) {
		return res.status(400).json({ status: err.name, message: err.errors });
	}
};

module.exports = {
	regisCheck,
	assignCheck,
	getCheck,
};
