import express from 'express';
const router = express.Router();

import { editarParcialmenteVaga } from '../../DAO/vaga/editar_parcialmente_vaga.js';

router.patch('/EditarParcialmenteVaga/:codigo', async (req, res) => {
    const { codigo } = req.params;
    const { campo, valor } = req.body;

    try {
        const resultado = await editarParcialmenteVaga(codigo, campo, valor);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar a vaga' });
    }
})

export default router;