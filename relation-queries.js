const { user, todoItem, todoList } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });
  return lists.map((list) => list.toJSON());
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.toJSON());
}

// getUsers().then((users) => console.log(users));

async function getImportantTodos() {
  try {
    const todos = await todoItem.findAll({
      where: { important: true },
      include: { model: todoList, attributes: ["name"] },
    });
    return todos.map((item) => item.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
}

getImportantTodos().then((items) => console.log("important Todos", items));

async function imporantTodos() {
  const todos = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  });
  return todos.map((item) => item.get({ plain: true }));
}

// imporantTodos().then((items) => console.log("important todoItems", items));

// async function importantTodos() {
//   try {
//     const importantTodos = await todoItem.findAll({
//       where: { important: true },
//       raw: true,
//     });
//     console.log(importantTodos);
//     return importantTodos;
//   } catch (e) {
//     console.log(e);
//   }
// }

// importantTodos();
