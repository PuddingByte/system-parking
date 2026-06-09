import express from "express";
import {adicionarEndereco} from "../../DAO/endereco/adicionar_endereco.js";
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const dados = req.body
        const resultado = await adicionarEndereco(dados)
        res.status(201).json(resultado)
    } catch(error){
        console.error("Erro ao adicionar novo endereço" + error)
        res.status(500).json({error: "Erro ao adicionar novo endereço"})
    }
    
})

export default router;