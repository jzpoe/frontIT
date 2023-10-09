const express = require('express')
const router = express.Router()
const itemSchema = require('../model/modelItem')


router.get('/obtener', (req, res)=>{
    try{
        itemSchema
        .find()
        .then((data)=> res.json(data))
    } catch(err){
        conaole.error("error al obtener los items", err)
        res.status(500).send("error al obtener los items")
    }
})


router.post('/add', async (req, res)=>{
    try{
        const item = itemSchema(req.body)
        const saveItem = await item.save()
        res.status(200).json(saveItem)
        console.log("objetos salvados con exito")
    }catch(err){
        console.error("error salvando los items", err)
        res.status(500).send("error al salvar la informacion")
    }
})



router.delete("/eliminar/:deleteId",  async (req, res) => {
    try{
      const {deleteId } = req.params;
      const result = await itemSchema.deleteOne({ _id: deleteId})
      if (result.deletedCount === 1) {
        res.status(200).send("Tarea eliminada satisfactoriamente");
      } else {
        res.status(404).send("No se encontró ninguna tarea con el ID proporcionado");
      }
      
    }catch (error) {
      console.error("Error al obtener las tareas:", error);
      res.status(500).send("Hubo un error al obtener las tareas.");
    }
  });



module.exports = router;