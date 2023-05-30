import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

//add authorization
router.get('/signup', AuthController);

module.exports = router;
