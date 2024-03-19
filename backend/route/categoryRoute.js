import express from 'express';
import { createCategory } from '../controller/categoryController.js';

const route = express.Router();

route.post('/create', createCategory);

export default route;