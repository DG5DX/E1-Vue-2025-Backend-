import { response } from "express";
import axios from "axios";
import Productos from "../models/Productos.js";

const postProductos = async (req, res) => {
    const authHeader = req.headers.authorization
    let token = ""
    try {
        if (authHeader){
            token = authHeader.split(" ")[1];
        }else{
            res.status(401).json({ error: "No autorizado" })
        }
        
        const {
            // numbering_rage_id,
            identification,
            reference_code,
            observation,
            payment_form,
            // payment_due_date,
            payment_method_code,
            billing_period,
            customer,
            items,
        } = req.body;

        // const facturaValida = await axios.post(
        //     process.env.URL_API,
        //     {
        //         number_rage_id,
        //         reference_code,
        //         observation,
        //         payment_form,
        //         payment_due_date,
        //         payment_method_code,
        //         billing_period,
        //         customer,
        //         items,
        //     },
        //     {
        //         headers: {Authorization: `Bearer ${token}`},
        //     }
        // );

        // let response = facturaValida.data

        const producto = new Productos ({
            // numbering_rage_id,
            identification,
            reference_code,
            observation,
            payment_form,
            // payment_due_date,
            payment_method_code,
            billing_period,
            customer,
            items,
            // cufe:response.date.bill.cufe,
            // url:response.data.bill.public_url,
            // qr:response.data.bill.qr,
            // qr_image:response.data.bill.qr_image,
            // number:response.data.bill.number,
        })
        await producto.save()
        res.json({facturaValida: producto})
        console.log("Correcto");
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log("error",error);
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