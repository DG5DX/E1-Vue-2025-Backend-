import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    identification:{type:String, required:true},
    dv:{type:String, required:true},
    company:{type:String, required:true},
    trade_name:{type:String, required:true},
    names:{type:String, required:true},
    address:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    legal_organization_id:{type:String, required:true},
    tribute_id:{type:String, required:true},
    identification_document_id:{type:String, required:true},
    municipality_id:{type:String, required:true},
})

export default mongoose.model("Clientes", clienteSchema)