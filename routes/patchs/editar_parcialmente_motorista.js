import express from "express";
import { editarParcialmenteCliente } from "../../DAO/proprietario/editar_parcialmente_proprietario.js";

const router = express.Router();

async function editarProprietario(req, res) {
    try {
        const { codigo } = req.params;
        const { campo, valor } = req.body;
        const resultado = await editarParcialmenteCliente(codigo, campo, valor);
        res.status(200).json(resultado);
    } catch (error) {
        console.error("Erro ao editar parcialmente o proprietario:", error);
        res.status(500).json({ error: "Erro ao editar parcialmente o proprietario" });
    }
}

router.patch(['/:codigo', '/EditarParcialmenteProprietario/:codigo'], editarProprietario);

export default router;
