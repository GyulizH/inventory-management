import { Router } from "express";

import {getExpensesByCategory} from "../controllers/expenseController";

const router = Router();

router.get("/", getExpensesByCategory); //localhost:8000/dashboards

export default router;