import {conexao} from "../conexao.js";

async function adicionarVaga(dados){
    const realizarConexao = await conexao()
    const sql = `INSERT INTO vaga_tbl (statusVaga , tipo) VALUES ?`
    try{
        const data = [dados]
        const [results] = await realizarConexao.query(sql, [data])
        return results;
    } catch(error){
        console.error("Erro ao adicionar nova vaga" + error)
    }
}

export {adicionarVaga}