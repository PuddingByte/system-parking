import { conexao } from "../conexao.js";

async function deletarProprietario(cpf){
    const realizarConexao = await conexao();
    try{
        const sql = "DELETE FROM proprietario_tbl WHERE cpf = ?";
        const [rows] = await realizarConexao.query(sql, [cpf]);
        return rows;
    } catch(error){
        console.error("Erro ao deletar motorista" + error)
        throw error;
    } finally {
        await realizarConexao.end();
    }
}

export {deletarProprietario};
