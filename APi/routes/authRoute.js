import express from "express";
import { SignUp } from "../controller/SignUpController.js";

const router = express.Router();

// router.get("/signUp", getSignUp);

router.post("/signup", SignUp);

export default router;
