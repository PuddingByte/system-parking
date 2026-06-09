import express from 'express';
const router = express.Router();

import { editarParcialmenteRegistro } from '../../DAO/registro/editar_parcialmente_registro.js';

router.patch('/EditarParcialmenteRegistro/:codigo', async (req, res) => {
    const { codigo } = req.params;
    const { campo, valor } = req.body;

    try {
        const resultado = await editarParcialmenteRegistro(codigo, campo, valor);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar o registro' });
    }
})

export default router;