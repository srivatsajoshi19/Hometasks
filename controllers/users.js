import { v4 as uuidv4 } from "uuid";

const users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userObj = { ...user, id: uuidv4(), isDeleted: false };
  users.push(userObj);
  res.send(`User with id: ${userObj.id} added to database`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const deletedUser = users.find((user) => user.id === id);
  deletedUser.isDeleted = true;
  res.send(deletedUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { login, password, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (login) userToBeUpdated.login = login;

  if (password) userToBeUpdated.password = password;

  if (age) userToBeUpdated.age = age;

  res.send(`User with id ${userToBeUpdated.id} has been updated`);
};
