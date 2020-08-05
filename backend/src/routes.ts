import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();

routes.post('/classes', ClassesController.create);

export default routes;