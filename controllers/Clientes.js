import Clientes from "../models/Clientes.js";

const postCliente = async (req, res) => {
	try {
		const { ...data } = req.body;
		const cliente = await Clientes.create(data);
		res.json({ cliente });
	} catch (error) {
		res.json({ error: error.message });
		console.log(error);
	}
};

const getCliente = async (req, res) => {
	try {
		const cliente = await Clientes.find();
		res.json({ cliente });
	} catch (error) {
		res.json({ error: error.message });
		console.log(error);
	}
};

export { postCliente, getCliente };
