import express from "express";
import { deletarTelefone } from "../../DAO/telefone/deletar_telefone.js";
const router = express.Router();

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const resultado = await deletarTelefone(id);

        if (resultado.affectedRows > 0) {
            res.json({
                message: "Telefone deletado com sucesso",
                Consulta: resultado
            });
        } else {
            res.status(404).json({ error: "Telefone não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao deletar telefone " + error);
        res.status(500).json({ error: "Erro ao deletar telefone " });
    }
})

export default router;
