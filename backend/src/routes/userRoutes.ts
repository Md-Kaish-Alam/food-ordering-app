import express from "express";
import { jwtCheck } from "../middleware/auth";
import { jwtParse } from "./../middleware/auth";
import userController from "../controllers/userController";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, userController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateUserRequest,
  userController.updateCurrentUser
);

export default router;
