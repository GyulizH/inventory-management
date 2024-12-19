import { Router } from "express";
import {createProduct, getProducts} from "../controllers/productController";

const router = Router();

router.get("/", getProducts); //localhost:8000/dashboards
router.post("/", createProduct);

export default router;