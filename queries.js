const User = require("./models").user;
const TodoItem = require("./models").todoItem;

const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    const allUsers = await User.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

// getAllUsers().then((users) => console.log(users));

async function getUser() {
  try {
    const userByPk = await User.findByPk(1);
    return userByPk;
  } catch (e) {
    console.log(e);
  }
}

// getUser().then((user) => console.log(user));

async function createNewUser() {
  try {
    const newUser = await User.create({
      name: "Hans Peter",
      email: "Pipi@gmail.com",
      phone: 1234567,
      password: "test",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (e) {
    console.error(e);
  }
}

createNewUser().then((users) => console.log(users));
