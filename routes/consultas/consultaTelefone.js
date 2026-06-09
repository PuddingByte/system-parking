import express from "express";
const router = express.Router();
import { buscarTelefone } from "../../DAO/telefone/buscar_telefone.js";

router.get('/', async (req, res) => {
    try{
        const resposta = await buscarTelefone();
        res.json({"Consulta": resposta});
    } catch(error){
        console.error("Erro ao consultar tabela de telefone", error);
        res.status(500).json({error: "Erro ao consultar tabela de telefone"});
    }
});

export default router;