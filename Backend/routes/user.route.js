import express from "express";
import user from "../controlers/user.controler.js";

const UserRouter = express.Router();

UserRouter.get("/user", user);

export default UserRouter;
