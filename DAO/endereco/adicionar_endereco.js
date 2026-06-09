import {conexao} from "../../DAO/conexao.js";

async function adicionarEndereco(dados){
    const realizarConexao = await conexao()
    const sql = `INSERT INTO endereco_tbl (cep, rua, bairro, cidade, estado, numero, id_proprietario) VALUES ?`
    try{
        const data = [dados]
        const [results] = await realizarConexao.query(sql, [data])
        return results;
    } catch(error){
        console.error("Erro ao adicionar novo endereço" + error)
    }
}

export {adicionarEndereco}