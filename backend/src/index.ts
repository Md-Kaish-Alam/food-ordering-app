import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to Database");
});

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server Started at localhost, \t http://localhost:${PORT}`);
});
