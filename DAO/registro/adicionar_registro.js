import {conexao} from "../../DAO/conexao.js";

async function adicionarRegistro(dados){
    const realizarConexao = await conexao()
    const sql = `INSERT INTO registro_tbl (data_entrada, id_proprietario, id_vaga, statusRegistro) VALUES ?`
    try{
        const data = [dados]
        const [results] = await realizarConexao.query(sql, [data])
        return results;
    } catch(error){
        console.error("Erro ao adicionar novo registro" + error)
    }
}

export {adicionarRegistro}