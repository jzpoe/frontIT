

const mongoose =require('mongoose');


const itemSchema = mongoose.Schema({
        
    cliente : {
type : String, require : true,
    } ,

    serial : {
        type : String, require : true,
    },
    activoF : {
        type : String, require : true,
    },
    
    activoFC : {
        type : String, require : true,
    }, 

    tipo :{
        type : String, require : true,
    },
    
   
    valor : {
        type : String, require : true,
    },

    detalle : {
        type : String, require : true,
    }
});
const Item = mongoose.model('Item', itemSchema);
module.exports =  Item