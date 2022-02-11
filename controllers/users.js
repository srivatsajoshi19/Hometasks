import { v4 as uuidv4 } from "uuid";
// const inputValidation = require("../validator/validation");
const Joi = require("joi");

const users = [];

const schema = Joi.object({
  login: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().required(),
  age: Joi.number().required().min(4).max(130),
}).unknown();

export const getUsers = (req, res) => {
  if (users.length) {
    res.status(200).send(users);
  } else {
    res.status(400);
    res.json({
      error: "No users in the DBs",
    });
  }
};

export const createUser = (req, res) => {
  const user = req.body;
  const userObj = { ...user, id: uuidv4(), isDeleted: false };
  users.push(userObj);
  res.status(200).send(`User with id: ${userObj.id} added to database`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const { password, ...foundUser } = users.find((user) => user.id === id);
  if (foundUser) {
    res.status(200).send(foundUser);
  } else {
    res.status(404);
    res.json({
      error: "User not found",
    });
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const deletedUser = users.find((user) => user.id === id);
  if (deletedUser) {
    deletedUser.isDeleted = true;
    res.status(200).send(deletedUser);
  } else {
    res.status(400);
    res.json({
      error: "Could not delete user",
    });
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { login, password, age } = req.body;

  const response = schema.validate({ login, password, age });

  if (response.error) {
    return res.status(400).send(response.error.details[0].message);
  } else {
    const userToBeUpdated = users.find((user) => user.id === id);

    if (login) userToBeUpdated.login = login;

    if (password) userToBeUpdated.password = password;

    if (age) userToBeUpdated.age = age;

    res.status(200);

    res.send(`User with id ${userToBeUpdated.id} has been updated`);
  }
};
