import express from "express";
const router = express.Router();
import {editarIntegralmenteVaga} from "../../DAO/vaga/editar_integralmente_vaga.js";

router.put('/EditarTIntegralmenteVaga/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { statusVaga, tipo } = req.body;
        const resultado = await editarIntegralmenteVaga({ statusVaga, tipo }, id);
        res.status(200).json(resultado);
    } catch(error){
        console.error("Erro ao editar a vaga:", error);
        res.status(500).json({ error: "Erro ao editar a vaga" });
    }
})

export default router;