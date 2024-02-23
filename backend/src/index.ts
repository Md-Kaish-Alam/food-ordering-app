import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello! It's Backend!" });
});

app.listen(PORT, () => {
  console.log(`Server Started at localhost, \t http://localhost:${PORT}`);
})
