import { conexao } from "../conexao.js";

async function deletarTelefone(id) {
    const realizarConexao = await conexao();
    try {
        const sql = "DELETE FROM telefone_tbl WHERE id_telefone = ?";
        const [rows] = await realizarConexao.query(sql, [id]);
        return rows;
    } catch (error) {
        console.error("Erro ao deletar telefone " + error)
    }
}

export {deletarTelefone};
