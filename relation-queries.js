// const { user, todoItem, todoList } = require("./models");

async function listsWithUsers() {
  try {
    const lists = await todoList.findAll({
      include: [user],
    });
    return lists.map((list) => list.toJSON());
  } catch (e) {
    console.log(e.message);
  }
}

// const { user } = require("pg/lib/defaults");
// listsWithUsers().then((lists) => console.log(lists));

// async function getUsers() {
//   const allUsers = await user.findAll({
//     include: { model: todoList, attributes: ["name"] },
//   });
//   return allUsers.map((user) => user.toJSON());
// }

// // getUsers().then((users) => console.log(users));

// async function getImportantTodos() {
//   try {
//     const todos = await todoItem.findAll({
//       where: { important: true },
//       include: { model: todoList, attributes: ["name"] },
//     });
//     return todos.map((item) => item.get({ plain: true }));
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// // getImportantTodos().then((items) => console.log("important Todos", items));

// async function imporantTodos() {
//   const todos = await todoItem.findAll({
//     where: { important: true },
//     include: { model: todoList, attributes: ["name"] },
//   });
//   return todos.map((item) => item.get({ plain: true }));
// }

// // imporantTodos().then((items) => console.log("important todoItems", items));

// // async function importantTodos() {
// //   try {
// //     const importantTodos = await todoItem.findAll({
// //       where: { important: true },
// //       raw: true,
// //     });
// //     console.log(importantTodos);
// //     return importantTodos;
// //   } catch (e) {
// //     console.log(e);
// //   }
// // }

// // importantTodos();

// async function fullUserById(id) {
//   const result = await user.findByPk(id, {
//     include: [
//       {
//         model: todoList,
//         attributes: ["name"],
//         include: { model: todoItem, attributes: ["task"] },
//       },
//     ],
//   });
//   return result.get({ plain: true });
// }

// fullUserById(1).then((user) => console.log("User with tasks", user));

const { user, todoItem, todoList } = require("./models");

// // For a first example we can try getting our TodoLists
// // with some information about the user who owns them.
// // For this we are going to use the include keyword in
// // our query, like this:

async function listsWithUsers() {
  try {
    const lists = await todoList.findAll({
      include: [user],
    });
    return lists.map((list) => list.toJSON({ raw: true }));
  } catch (e) {
    console.log(e.message);
  }
}

// listsWithUsers().then((lists) => console.log(lists));

async function listsWithUsers() {
  try {
    const lists = await todoList.findAll({
      include: [{ model: user, attributes: ["name"] }],
    });
    return lists.map((list) => list.toJSON({ raw: true }));
  } catch (e) {
    console.log(e.message);
  }
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  try {
    const allUsers = await user.findAll({
      include: { model: todoList, attributes: ["name"] },
    });
    return allUsers.map((user) => user.toJSON({ raw: true }));
  } catch (e) {
    console.log(e.message);
  }
}

// getUsers().then((users) => console.log(users));

// Get one user by id with his lists.

async function getOneUserByIdWithList(id) {
  try {
    const oneUserByIdWithList = await user.findByPk(id, {
      include: [todoList],
    });
    return oneUserByIdWithList.get({ raw: true });
  } catch (e) {
    console.log(e.message);
  }
}

// getOneUserByIdWithList(2).then((user) =>
//   console.log("user by id with lists", user)
// );

async function getImportantItemsWithListTheyBelong() {
  try {
    const importantItemsWList = await todoItem.findAll({
      where: { important: true },
      include: { model: todoList, attributes: ["name"] },
    });
    return importantItemsWList.map((item) => item.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
}

// getImportantItemsWithListTheyBelong().then((items) =>
//   console.log("important todoItems", items)
// );

async function oneUserWithListsAndTodoItemTask(id) {
  try {
    const result = await user.findByPk(id, {
      include: [
        {
          model: todoList,
          attributes: ["name"],
          include: { model: todoItem, attributes: ["task"] },
        },
      ],
    });
    return result.get({ plain: true });
  } catch (e) {
    console.log(e.message);
  }
}

oneUserWithListsAndTodoItemTask(2).then((user) =>
  console.log("user with tasks", user)
);
