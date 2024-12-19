import { Router } from "express";
import {getUsers} from "../controllers/userController";

const router = Router();

router.get("/", getUsers); //localhost:8000/dashboards


export default router;