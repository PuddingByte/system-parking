import { conexao } from "../conexao.js";

async function deletarVeiculo(placa) {
    const realizarConexao = await conexao();
    try {
        const sql = "DELETE FROM veiculo_tbl WHERE placa = ?";
        const [rows] = await realizarConexao.query(sql, [placa]);
        return rows;
    } catch (error) {
        console.error("Erro ao deletar veiculo " + error)
    }
}

export {deletarVeiculo};
