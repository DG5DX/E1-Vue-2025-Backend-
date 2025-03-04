import Clientes from "../models/Clientes.js";

const postCliente = async (req, res) => {
  try {
    const {
      identification,
      dv,
      company,
      trade_name,
      names,
      address,
      email,
      phone,
      legal_organization_id,
      tribute_id,
      identification_document_id,
      municipality_id,
    } = req.body;

    const cliente = new Clientes({
      identification,
      dv,
      company,
      trade_name,
      names,
      address,
      email,
      phone,
      legal_organization_id,
      tribute_id,
      identification_document_id,
      municipality_id,
    });
    await cliente.save();
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: "customer register failed" });
    console.log(error);
  }
};

const getCliente = async (req, res) => {
  try {
    const clientes = await Clientes.find();
    res.json({ clientes });
  } catch (error) {
    res.status(400).json({ error: "Customer search failed" });
    console.log(error);
  }
};

export { postCliente, getCliente };