import express from "express";
import { adicionarTelefone } from "../../DAO/telefone/adicionar_telefone.js";
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const dados = req.body
        const resultado = await adicionarTelefone(dados)
        res.status(201).json(resultado)
    } catch(error){
        console.error("Erro ao adicionar telefone" + error)
        res.status(500).json({error: "Erro ao adicionar telefone"})
    }
    
})

export default router;
