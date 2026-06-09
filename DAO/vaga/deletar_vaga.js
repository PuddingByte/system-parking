import {conexao} from "../../DAO/conexao.js";

async function deletarVaga(id){
    const realizarConexao = await conexao();
    try{
        const sql = "DELETE FROM vaga_tbl WHERE id_vaga = ?";
        const [rows] = await realizarConexao.query(sql, [id]);
        return rows;
    } catch(error){
        console.error("Erro ao deletar vaga" + error)
    }
}

export {deletarVaga};