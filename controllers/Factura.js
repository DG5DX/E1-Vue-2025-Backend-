import Facturas from "../models/Factura.js"

const postFactura = async (req, res) => {
    try {
        const {
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes,
        } = req.body;

        const factura = new Facturas({
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes,
        });
        factura.save()
        res.json({factura})
    } catch (error) {
        res.status(400).json({error: "registro de la factura fallida"})
            console.log(error);
    }
};

const getFactura = async (req,res)=>{
    try {
        const facturas = await Facturas.find();
        res.json({facturas})
    } catch (error) {
        res.status(400).json({error:"items search failed"})
        console.log(error);
    }
}

export {
    postFactura,
    getFactura
}