import express from 'express';
import { getMessage, newMessage } from '../controllers/messageController.js';

const route = express.Router();

route.get('/messages/get/:id',getMessage);
route.post('/messages/add',newMessage);

export default route;