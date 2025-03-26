import Router from "express";
import { getCliente, postCliente } from "../controllers/Clientes.js";

const router = Router();

router.post("/", postCliente);
router.get("/", getCliente);

export default router;
