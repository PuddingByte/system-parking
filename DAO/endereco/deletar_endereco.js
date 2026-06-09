import {conexao} from "../../DAO/conexao.js";

async function deletarEndereco(id){
    const realizarConexao = await conexao();
    try{
        const sql = "DELETE FROM endereco_tbl WHERE id_endereco = ?";
        const [rows] =await realizarConexao.query(sql, [id]);
        return rows;
    } catch(error){
        console.error("Erro ao deletar endereço do motorista" + error)
    }
}

export {deletarEndereco};