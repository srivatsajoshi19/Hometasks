import express, {Router} from 'express';
import { getUsers, createUser, deleteUser, getUserById, updateUser } from '../controllers/useController';


const router:Router = express.Router();

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