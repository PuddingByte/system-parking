import express from "express";
import { editarIntegralmenteTelefone } from "../../DAO/telefone/editar_integralmete_telefone.js";
const router = express.Router()

router.put('/editarTotalmenteTelefone/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { ddd, numero , id_proprietario } = req.body;
        const resultado = await editarIntegralmenteTelefone({ ddd, numero, id_proprietario }, id);
        res.status(200).json(resultado);
    } catch(error){
        console.error("Erro ao editar o número de telefone:", error);
        res.status(500).json({ error: "Erro ao editar o número de telefone" });
    }
})

export default router;
