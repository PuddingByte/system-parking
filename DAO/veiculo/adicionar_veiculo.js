import { conexao } from "../conexao.js";

async function adicionarVeiculo(dados){
    const realizarConexao = await conexao()
    const sql = `INSERT INTO veiculo_tbl ( placa, modelo, ano, cor, marca) VALUES ?;`
    try{
        const data = [dados]
        const [results] = await realizarConexao.query(sql, [data])
        return results;
    } catch(error){
        console.error("Erro ao adicionar veiculo" + error)
    }
}

export {adicionarVeiculo}
