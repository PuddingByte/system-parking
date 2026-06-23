import express from 'express';
const router = express.Router();

import { editarParcialmenteTelefone } from '../../DAO/telefone/editar_telefone_parcialmente.js';

router.patch('/EditarParcialmenteTelefone/:id', async (req, res) => {
    const { id } = req.params;
    const { campo, valor } = req.body;

    try {
        const resultado = await editarParcialmenteTelefone(id, campo, valor);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar o número de telefone' });
    }
})

export default router;
