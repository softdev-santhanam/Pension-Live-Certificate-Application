import express from "express";
import bcrypt from "bcrypt";

import { loginUser, singupUser } from "../controller/account-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";

import upload from "../utils/upload.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", singupUser);

const salt = await bcrypt.genSalt(Number(process.env.SALT));

export default router;
