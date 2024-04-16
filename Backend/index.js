import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import AuthRoute from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_LINK)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use("/api", UserRouter);
app.use("/api", AuthRoute);

app.listen(3000, () => {
  console.log("app is listing on port 3000");
});
