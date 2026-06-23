import {conexao} from "../conexao.js"

async function adicionarTelefone(dados){
    const realizarConexao = await conexao()
    const sql = `INSERT INTO telefone_tbl ( ddd, numero, id_proprietario) VALUES ?;`
    try{
        const data = [dados]
        const [results] = await realizarConexao.query(sql, [data])
        return results;
    } catch(error){
        console.error("Erro ao adicionar telefone" + error)
    }
}

export {adicionarTelefone}