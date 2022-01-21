import express from "express";
import { v4 as uuidv4 } from "uuid";
import {getUsers, getUserById, createUser, deleteUser, updateUser} from "../controllers/users.js" 

const router = express.Router();

const users = [];

//GET ALL USERS
router.get("/",getUsers);

//POST : CREATE NEW USER
router.post("/", createUser);

//GET USERS BY ID
router.get("/:id", getUserById);

//DELETE USERS BY ID
router.delete("/:id", (deleteUser));

//UPDATE USER BY
router.patch("/:id", updateUser);

export default router;
