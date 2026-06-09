import express from "express";
const router = express.Router()
import {buscarEndereco, buscarEnderecoPorId} from "../../DAO/endereco/buscar_endereco.js";

router.get("/", async (req,res) => {
    try {
        let resposta = await buscarEndereco()
        res.json({ Consulta: resposta })
    } catch (error) {
        console.error(error)
        res.status(500).json({erro: error})
    }
});


router.get("/:id", async (req,res)=>{
    let id = req.params.id;
    try{
        let resposta = await buscarEnderecoPorId(id)
        res.json({Consulta: resposta})

    } catch(error){
        console.error(error)
        res.status(500).json({erro: error})
    }
})

export default router;