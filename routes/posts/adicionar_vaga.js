import express from "express";
import {adicionarVaga} from "../../DAO/vaga/adicionar_vaga.js";
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const dados = req.body
        const resultado = await adicionarVaga(dados)
        res.status(201).json(resultado)
    } catch(error){
        console.error("Erro ao adicionar nova vaga" + error)
        res.status(500).json({error: "Erro ao adicionar nova vaga"})
    }
    
})

export default router;