import express from "express";
const router = express.Router();

import {deletarEndereco} from "../../DAO/endereco/deletar_endereco.js";

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const resultado = await deletarEndereco(id);

        if(resultado.affectedRows > 0){
            res.json({
                message: "Endereço do motorista deletado com sucesso",
                Consulta: resultado
            });
        } else {
            res.status(404).json({error: "Endereço do motorista não encontrado"});
        }
    } catch(error){
        console.error("Erro ao deletar endereço do motorista" + error);
        res.status(500).json({error: "Erro ao deletar endereço do motorista"});
    }
}
);

export default router;