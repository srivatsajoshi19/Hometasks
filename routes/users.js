import express from "express";
import {getUsers, getUserById, createUser, deleteUser, updateUser} from "../controllers/users.js" 

const router = express.Router();



//GET ALL USERS
router.get("/",getUsers);

//POST : CREATE NEW USER
router.post("/", validator, createUser);

//GET USERS BY ID
router.get("/:id", getUserById);

//DELETE USERS BY ID
router.delete("/:id", (deleteUser));

//UPDATE USER BY
router.patch("/:id", updateUser);

export default router;
