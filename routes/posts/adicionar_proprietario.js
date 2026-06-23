import express from "express";
import { incluirCliente } from "../../DAO/proprietario/inserir_proprietario.js";
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const dados = req.body
        const resultado = await incluirCliente(dados)
        res.status(201).json(resultado)
    } catch(error){
        console.error("Erro ao adicionar novo proprietario" + error)
        const status = error.message.includes("Campos obrigatorios faltando") ? 400 : 500;
        res.status(status).json({error: error.message})
    }
    
})

export default router;
