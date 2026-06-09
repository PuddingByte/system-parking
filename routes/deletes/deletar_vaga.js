import express from "express";
const router = express.Router();

import {deletarVaga} from "../../DAO/vaga/deletar_vaga.js";

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const resultado = await deletarVaga(id);

        if(resultado.affectedRows > 0){
            res.json({
                message: "Vaga deletada com sucesso",
                Consulta: resultado
            });
        } else {
            res.status(404).json({error: "Vaga não encontrada"});
        }
    } catch(error){
        console.error("Erro ao deletar vaga" + error);
        res.status(500).json({error: "Erro ao deletar vaga"});
    }
}
);

export default router;