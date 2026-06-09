import express from 'express';
const router = express.Router();

import { editarParcialmenteEndereco } from '../../DAO/endereco/editar_parcialmente_endereco.js';

router.patch('/EditarParcialmenteEndereco/:codigo', async (req, res) => {
    const { codigo } = req.params;
    const { campo, valor } = req.body;

    try {
        const resultado = await editarParcialmenteEndereco(codigo, campo, valor);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar o endereço' });
    }
})

export default router;