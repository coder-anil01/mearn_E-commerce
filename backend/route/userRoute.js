import express from 'express';
import { createUser, signIn, userVerify } from '../controller/userController.js';

const route = express.Router();

route.post('/createUser', createUser);

route.post('/verifyOtp', userVerify);

route.post('/signIn', signIn);

export default route;