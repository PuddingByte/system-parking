import express from "express";
const router = express.Router()
import { buscarProprietario, buscarPropietarioPorCpf } from "../../DAO/proprietario/buscar_proprietario.js";

router.get("/", async (req,res) => {
    try {
        let resposta = await buscarProprietario()
        res.json({ Consulta: resposta })
    } catch (error) {
        console.error(error)
        res.status(500).json({erro: error})
    }
});


router.get("/:id", async (req,res)=>{
    let cpf = req.params.id;
    try{
        let resposta = await buscarPropietarioPorCpf(cpf)
        res.json({Consulta: resposta})

    } catch(error){
        console.error(error)
        res.status(500).json({erro: error})
    }
})

export default router;
