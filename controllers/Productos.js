import Productos from "../models/Productos.js";

const postProductos = async (req, res) => {
    try {
        const {
            number_rage_id,
            reference_code,
            observation,
            payment_form,
            paymet_due_date,
            payment_method_code,
            billing_period,
        } = req.body;

        const producto = new Productos ({
            number_rage_id,
            reference_code,
            observation,
            payment_form,
            paymet_due_date,
            payment_method_code,
            billing_period,
        })
        producto.save()
        res.json({producto})
    } catch (error) {
        res.status(400).json({error})
    }
};

const getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.json({productos})
    } catch (error) {
        res.status(400).json({error:"Products not found"});
        console.log(error);
    }
};

export {
    postProductos,
    getProductos
}