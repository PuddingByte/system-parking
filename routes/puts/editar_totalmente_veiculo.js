import express from "express";
const router = express.Router();
import { editarIntegralmenteVeiculo } from "../../DAO/veiculo/editar_integralmente_veiculo.js";

router.put('/EditarTIntegralmenteVeiculo/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { placa, modelo, ano, cor, marca } = req.body;
        const resultado = await editarIntegralmenteVeiculo({ placa, modelo, ano, cor, marca }, id);
        res.status(200).json(resultado);
    } catch(error){
        console.error("Erro ao editar o veiculo:", error);
        res.status(500).json({ error: "Erro ao editar o veiculo" });
    }
})

export default router;
