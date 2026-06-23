import { conexao } from "../conexao.js";

async function adicionarVeiculo(infos) {
    const realizarConexao = await conexao()
    const sql = `INSERT INTO veiculo_tbl ( placa, modelo, ano, cor, marca) VALUES (?, ?, ?, ?, ?);`
    try {
        const params = [
            infos.placa,
            infos.modelo,
            infos.ano,
            infos.cor,
            infos.marca
        ]
        const [results] = await realizarConexao.query(sql, params)
        return results;
    } catch (error) {
        console.error("Erro ao adicionar veiculo" + error)
    }
}

export { adicionarVeiculo }
