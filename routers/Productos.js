import Router from "express";
const router = Router();

import { postProductos, getProductos } from "../controllers/Productos.js";

router.post("/", postProductos)

router.get("/", getProductos)

export default router;