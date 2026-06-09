import express from "express";
const router = express.Router();
import {editarIntegralmenteEndereco} from "../../DAO/endereco/editar_integralmente_endereco.js";

router.put('/EditarTIntegralmenteEndereco/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { rua, numero, bairro, cidade, estado, cep } = req.body;
        const resultado = await editarIntegralmenteEndereco({ rua, numero, bairro, cidade, estado, cep }, id);
        res.status(200).json(resultado);
    } catch(error){
        console.error("Erro ao editar o endereço:", error);
        res.status(500).json({ error: "Erro ao editar o endereço" });
    }
})

export default router;