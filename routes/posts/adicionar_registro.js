import express from "express";
import {adicionarRegistro} from "../../DAO/registro/adicionar_registro.js";
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const dados = req.body
        const resultado = await adicionarRegistro(dados)
        res.status(201).json(resultado)
    } catch(error){
        console.error("Erro ao adicionar novo registro" + error)
        res.status(500).json({error: "Erro ao adicionar novo registro"})
    }
    
})

export default router;