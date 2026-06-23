import express from 'express';
import { adicionarVeiculo } from '../../DAO/veiculo/adicionar_veiculo.js';
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const dados = req.body;
        const resultado = await adicionarVeiculo(dados)
        res.status(201).json(resultado)
    } catch(error){
        console.error("Erro ao adicionar novo veiculo" + error)
        res.status(500).json({error: "Erro ao adicionar novo veiculo"})
    }
})

export default router;
