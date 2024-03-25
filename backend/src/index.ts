import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import express, { Request, Response } from "express";

import userRoutes from "./routes/userRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to Database");
});

const PORT = 5001;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({
    message: "health OK!",
  });
});

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server Started at localhost, \t http://localhost:${PORT}`);
});
