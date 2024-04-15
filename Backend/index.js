import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.DATABASE_LINK)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", UserRouter);

app.listen(3000, () => {
  console.log("app is listing on port 3000");
});
