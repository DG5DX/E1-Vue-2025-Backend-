import Productos from "../models/Productos.js";

const postProductos = async (req, res) => {
	// const authHeader = req.headers.authorization;
	// let token = "";
	try {
		// if (authHeader) {
		// 	token = authHeader.split(" ")[1];
		// } else {
		// 	res.status(401).json({ error: "No autorizado" });
		// }

		const { ...data } = req.body;
		const producto = await Productos.create(data);
		res.json({ producto });
		console.log(producto);
	} catch (error) {
		res.json({ error: error.message });
		console.log("error", error);
	}
};

const getProductos = async (req, res) => {
	try {
		const producto = await Productos.find();
		res.json({ producto });
		console.log(producto);
	} catch (error) {
		res.json({ error: error.message });
		console.log(error);
	}
};

export { postProductos, getProductos };
