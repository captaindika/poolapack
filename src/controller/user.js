const User = require("../model/user");
const { Op } = require("sequelize");

const register = async (req, res) => {
	try {
		const { Users } = req.body;
		const dataUser = Users.map((element) => {
			return { email: element };
		});
		const isExist = await User.count({ where: { email: { [Op.in]: Users } } });
		if (isExist !== 0) {
			throw new Error("Email is Exist");
		}
		const createUser = await User.bulkCreate(dataUser);
		if (createUser.length !== Users.length) {
			throw new Error("Error while creating user");
		}
		res.status(204).send("No Content");
	} catch (e) {
		res.status(500).json({ status: "error", message: e.message });
	}
};

const assign = async (req, res) => {
	try {
		const { user, tasks } = req.body;
		const updateUser = await User.update(
			{ task: JSON.stringify(tasks) },
			{
				where: {
					email: user,
				},
			}
		);
		console.log(updateUser);
		if (!updateUser[0]) {
			throw new Error("Error Not Found");
		}
		res.status(204).send("No Content");
	} catch (e) {
		res.status(500).json({ status: "error", message: e.message });
	}
};

const unassign = async (req, res) => {
	try {
		const { user, tasks } = req.body;
		const result = await User.findOne({
			attributes: ["task"],
			where: { email: user },
		});
		if (!result) {
			throw new Error("Email not found");
		}
		let newTask = JSON.parse(result.dataValues.task);
		newTask = newTask.filter((val) => !tasks.includes(val));
		await User.update(
			{ task: JSON.stringify(newTask) },
			{ where: { email: users } }
		);
		res.status(204).send("No Content");
	} catch (e) {
		res.status(500).json({ status: "error", message: e.message });
	}
};
const common = async (req, res) => {
	try {
		const { user } = req.body;
		const result = await User.findAll({
			attributes: ["task"],
			where: { email: { [Op.in]: user } },
		});
		const temp = result
			.map((element) => {
				if (element.dataValues.task) {
					const temp = JSON.parse(element.dataValues.task);
					return temp[0];
				}
			})
			.filter((el) => el);
		const tasks = [...new Set(temp)];
		res.status(200).json({ tasks });
	} catch (e) {
		res.status(500).json({ status: "error", message: e.message });
	}
};
module.exports = {
	register,
	assign,
	unassign,
	common,
};
