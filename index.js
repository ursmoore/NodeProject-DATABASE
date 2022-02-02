const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const TodoList = require("./models").todoList;

app.use(express.json());

app.get(
  "/hello", // route
  (request, response) => {
    // handler callback
    // send data to client
    response.send("hello client");
  }
);

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.post("/users", async (request, response, next) => {
  try {
    const email = request.body.email;
    if (!email || email === " ") {
      response.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(request.body);
      response.send(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (request, response, next) => {
  try {
    console.log("my params", request.params);
    const userId = parseInt(request.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      response.status(404).send("User not found");
    } else {
      response.send(user);
    }
  } catch (e) {
    next(e);
  }
});

//The Sequelize code to update a user looks like this:

app.put("/users/:userId", async (request, response, next) => {
  try {
    const userId = parseInt(request.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      response.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(request.body);
      response.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

// app.get("/users/:userId/lists", async (request, response, next) => {
//   try {
//     const userId = parseInt(request.params.userId);
//     const user = await User.findByPk(userId, {
//       include: [TodoList],
//     });

//     if (user) {
//       response.send(user.todoLists);
//     } else {
//       response.status(404).send("User not found");
//     }
//   } catch (e) {
//     next(e);
//   }
// });

app.post("/todoLists", async (request, response, next) => {
  try {
    const name = request.body.name;
    if (!name || name === " ") {
      response.status(400).send("Must provide a name for the list");
    } else {
      const list = await TodoList.create(request.body);
      response.send(list);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId", async (request, response, next) => {
  try {
    const userId = parseInt(request.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      response.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(request.body);
      response.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId/lists", async (request, response, next) => {
  try {
    const userId = parseInt(request.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (user) {
      response.send(user.todoLists);
    } else {
      response.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

// app.get("/users/:userId/lists", async (request, response, next) => {
//   try {
//     const userId = parseInt(request.params.userId);
//     const user = await User.findByPk(userId, {
//       include: [
//         {
//           model: todoList,
//           attributes: ["name"],
//           include: { model: todoItem, attributes: ["task"] },
//         },
//       ],
//     });
//     if (user) {
//       response.send(user.todoLists);
//     } else {
//       response.status(404).send("User not found");
//     }
//   } catch (e) {
//     next(e);
//   }
// });

app.get("/todoLists", async (req, res, next) => {
  const todoLists = await TodoList.findAll();
  res.json(todoLists);
});

app.post("/todoLists", async (req, res, next) => {
  try {
    const newList = await TodoList.create(req.body);
    res.json(newList);
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
