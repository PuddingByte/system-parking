import express from "express";
import { editarIntegralmenteCliente } from "../../DAO/proprietario/editar_integralmente_proprietario.js";

const router = express.Router();

async function editarProprietario(req, res) {
    try {
        const { codigo } = req.params;
        const { cpf, nome, email, genero, placa_veiculo } = req.body;
        const resultado = await editarIntegralmenteCliente([cpf, nome, email, genero, placa_veiculo], codigo);
        res.status(200).json(resultado);
    } catch (error) {
        console.error("Erro ao editar o proprietario:", error);
        res.status(500).json({ error: "Erro ao editar o proprietario" });
    }
}

router.put(['/:codigo', '/EditarTIntegralmenteProprietario/:codigo'], editarProprietario);

export default router;
