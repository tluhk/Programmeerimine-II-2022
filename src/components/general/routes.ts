import express from 'express';
import generalController from './controllers';
const generalRoutes = express.Router();

generalRoutes
    .get('/', generalController.health);

export default generalRoutes;

