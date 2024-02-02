import express from "express";
import { SignUp } from "../controller/SignUpController.js";
import { signIn } from "../controller/SignUpController.js";

const router = express.Router();

// router.get("/signUp", getSignUp);

router.post("/signup", SignUp);
router.post("/signin", signIn);

export default router;
