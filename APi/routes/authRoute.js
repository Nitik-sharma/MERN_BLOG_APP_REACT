import express from "express";
import { SignUp } from "../controller/SignUpController.js";
import { getSignUp } from "../controller/GetSignUp.js";

const router = express.Router();

router.get("/signUp", getSignUp);

router.post("/signUp", SignUp);

export default router;
