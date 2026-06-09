import express from "express";
const router = express.Router();

import {deletarRegistro} from "../../DAO/registro/deletar_registro.js";

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const resultado = await deletarRegistro(id);

        if(resultado.affectedRows > 0){
            res.json({
                message: "Registro deletado com sucesso",
                Consulta: resultado
            });
        } else {
            res.status(404).json({error: "Registro não encontrado"});
        }
    } catch(error){
        console.error("Erro ao deletar registro" + error);
        res.status(500).json({error: "Erro ao deletar registro"});
    }
}
);

export default router;