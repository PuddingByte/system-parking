import express from "express"
const router = express.Router()

import { deletarProprietario } from "../../DAO/proprietario/deletar_proprietario.js"

router.delete('/:id', async (req, res) => {
    try {
        const cpf = req.params.id;

        const resultado = await deletarProprietario(cpf);

        if (resultado.affectedRows > 0) {
            res.json({
                message: "Motorista deletado com sucesso",
                Consulta: resultado
            });
        } else {
            res.status(404).json({ error: "Motorista não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao deletar motorista" + error);
        res.status(500).json({ error: "Erro ao deletar motorista" });
    }
})

export default router
