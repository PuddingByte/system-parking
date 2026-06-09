import express from "express"
const router = express.Router();
import {buscarRegistro, buscarRegistroPorId } from "../../DAO/registro/buscar_registro.js";

router.get("/", async (req, res) => {
    try {
        let resposta = await buscarRegistro();
        res.json({ Consulta: resposta });
    } catch (error) {
        console.error(error)
        res.status(500).json({ erro: error })
    }
});

router.get("/:id", async (req,res) =>{
    const id = req.params.id;
    try {
        let resposta = await buscarRegistroPorId(id);
        res.json({ Consulta: resposta });
    } catch (error) {
        console.error(error)
        res.status(500).json({ erro: error })
    }
})

export default router;