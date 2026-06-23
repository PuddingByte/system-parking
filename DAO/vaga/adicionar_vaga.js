import {conexao} from "../conexao.js";

async function adicionarVaga(dados){
    const realizarConexao = await conexao()
    const sql = `INSERT INTO vaga_tbl (statusVaga , tipo) VALUES (?, ?)`
    try{
        const params = [
            dados.statusVaga,
            dados.tipo,
        ]
        const [results] = await realizarConexao.query(sql, params)
        return results;
    } catch(error){
        console.error("Erro ao adicionar nova vaga" + error)
    }
}

export {adicionarVaga}