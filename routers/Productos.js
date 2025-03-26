import Router from "express";
import { postProductos, getProductos } from "../controllers/Productos.js";

const router = Router();

router.post("/", postProductos);
router.get("/", getProductos);

export default router;
