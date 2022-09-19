import  express  from "express";
import { Register } from '../controller/userController'
const routes  = express.Router();


routes.post('/register', Register);

export default routes;