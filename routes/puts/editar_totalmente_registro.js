import express from "express";
const router = express.Router();
import {editarIntegralmenteRegistro} from "../../DAO/registro/editar_integralmente_registro.js";

router.put('/EditarTIntegralmenteRegistro/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { data_entrada, data_saida, id_proprietario, id_vaga, statusRegistro } = req.body;
        const resultado = await editarIntegralmenteRegistro({ data_entrada, data_saida, id_proprietario, id_vaga, statusRegistro }, id);
        res.status(200).json(resultado);
    } catch(error){
        console.error("Erro ao editar o registro:", error);
        res.status(500).json({ error: "Erro ao editar o registro" });
    }
})

export default router;