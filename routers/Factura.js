import Router from 'express'
const router = Router();

import { postFactura, getFactura } from "../controllers/Factura.js";

router.post("/", postFactura)

router.get("items", getFactura)

export default router;