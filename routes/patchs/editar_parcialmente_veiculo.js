import express from 'express';
const router = express.Router();

import { editarParcialmenteVeiculo } from '../../DAO/veiculo/editar_parcialmente_veiculo.js';

router.patch('/EditarParcialmenteVeiculo/:placa', async (req, res) => {
    const { placa } = req.params;
    const { campo, valor } = req.body;

    try {
        const resultado = await editarParcialmenteVeiculo(placa, campo, valor);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar o veiculo' });
    }
})

export default router;
