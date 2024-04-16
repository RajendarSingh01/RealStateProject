import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const auth = async (req, res) => {
  const { username, email, name, password } = req.body;

  const bcryptPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, name, password: bcryptPassword });
  try {
    await newUser.save(); //command going to save user in database.
    res.status(200).json("user Added to database");
  } catch (error) {
    res.send(error.message);
  }
};

export default auth;
