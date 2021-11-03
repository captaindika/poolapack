// const { DataTypes } = require("sequelize");
// const db = require("../config/db");

// const User = db.define(
// 	"user",
// 	{
// 		email: {
// 			type: DataTypes.STRING,
// 			unique: true,
// 			allowNull: false,
// 			primaryKey: true,
// 		},
// 		task: {
// 			type: DataTypes.TEXT,
// 			allowNull: true,
// 		},
// 	},
// 	{
// 		tableName: "user",
// 		timestamps: false,
// 	}
// );
// module.exports = User;

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		email: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
			primaryKey: true,
		},
		task: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
	});

	return User;
};
