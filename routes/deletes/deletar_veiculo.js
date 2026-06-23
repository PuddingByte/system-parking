import express from "express";
import { deletarVeiculo } from "../../DAO/veiculo/deletar_veiculo.js";
const router = express.Router();

router.delete('/:placa', async (req, res) => {
    try {
        const placa = req.params.placa;
        const resultado =  await deletarVeiculo(placa);

        if(resultado.affectedRows > 0){
            res.json({
                message: "Veiculo deletado com sucesso",
                Consulta: resultado
            });
        } else {
            res.status(404).json({error: "Veiculo não encontrado"});
        }
    } catch (error) {
        console.error("Erro ao deletar veiculo" + error);
        res.status(500).json({error: "Erro ao deletar veiculo"});
    };
});

export default router;
