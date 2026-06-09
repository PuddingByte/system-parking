import {conexao} from "../../DAO/conexao.js";

async function deletarRegistro(id){
    const realizarConexao = await conexao();
    try{
        const sql = "DELETE FROM registro_tbl WHERE codigo = ?";
        const [rows] =await realizarConexao.query(sql, [id]);
        return rows;
    } catch(error){
        console.error("Erro ao deletar registro" + error)
    }
}

export {deletarRegistro};