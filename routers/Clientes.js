import Router from 'express';
const router = Router();

import { getCliente, postCliente } from "../controllers/Clientes.js";

router.post("/", postCliente)

router.get("/customers", getCliente)

export default router;