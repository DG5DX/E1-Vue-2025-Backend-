import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    // numbering_rage_id:{type:String, required:true},
    reference_code:{type:String, required:true},
    observation:{type:String},
    payment_form:{type:String, required:true},
    // payment_due_date:{type:Date, required:true}, esta es opcional
    payment_method_code:{type:String, required:true},
    billing_period:{
        start_date:{type:String, required:true},
        start_time:{type:String, required:true},
        end_date:{type:String, required:true},
        end_time:{type:String, required:true},
    },
    customer:{type:Object,required:true},
    items:{type:Object,required:true}
});

export default mongoose.model("Producto", productoSchema);