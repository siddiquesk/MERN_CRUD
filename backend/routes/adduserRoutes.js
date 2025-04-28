import express from 'express'
const router=express.Router();
import {addUser  ,getUser ,getSingleUser ,editUser ,deleteUser} from "../controller/addControlle.js"
router.post("/add",addUser);
router.get("/all",getUser);
router.get("/single/:id",getSingleUser);
router.put("/single/:id",editUser);
router.delete("/:id",deleteUser);
export default router;
