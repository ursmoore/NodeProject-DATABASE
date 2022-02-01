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

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean kitchen",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map((item) => item.toJSON());
  } catch (e) {
    console.log(e);
  }
}

// createSampleTodoItems().then((todos) => console.log(todos));

async function getAllItems() {
  try {
    const allItems = await TodoItem.findAll({ raw: true });
    return allItems;
  } catch (e) {
    console.log(e);
  }
}
// getAllItems().then((items) => console.log(items));

async function getAllItems() {
  try {
    const result = await TodoItem.findAndCountAll({
      where: {
        title: {
          [Op.like]: "foo%",
        },
      },
      offset: 10,
      limit: 2,
    });
    console.log(result.count);
    console.log(result.rows);
  } catch (e) {
    console.error(e);
  }
}

// getAllItems().then((items) => console.log(items)); //Whats that for????
