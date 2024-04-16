import express from "express";
import auth from "../controlers/auth.controler.js";

const AuthRoute = express.Router();

AuthRoute.post("/signin", auth);

export default AuthRoute;
