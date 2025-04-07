import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import routerCliente from "./routers/Clientes.js";
import routerFactura from "./routers/Factura.js";
import routerProducto from "./routers/Productos.js";

dotenv.config(); // Cargar variables antes de usarlas

const app = express();
const PORT = process.env.PORT || 5000; // Puerto dinámico o 3000 local

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/factus/cliente", routerCliente);
app.use("/factus/factura", routerFactura);
app.use("/factus/producto", routerProducto);

app.listen(PORT, () => {
	console.log("Escuchando en el puerto", PORT);
	mongoose
		.connect(process.env.CNX_MONGO)
		.then(() => console.log("Conectado a MongoDB"))
		.catch((error) => console.error("Error de conexión:", error));
});
