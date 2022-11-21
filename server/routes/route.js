import express from 'express';

import { loginUser, singupUser } from '../controller/account-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);


router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

export default router;