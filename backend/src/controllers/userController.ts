import { Request, Response } from "express";
import User from "../models/userModel";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user " });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const {
      name,
      mobileNo,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      country,
    } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    user.name = name;
    user.mobileNo = mobileNo;
    user.addressLine1 = addressLine1;
    user.addressLine2 = addressLine2;
    user.city = city;
    user.state = state;
    user.pincode = pincode;
    user.country = country;

    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user " });
  }
};

export default {
  createCurrentUser,
  updateCurrentUser,
};
