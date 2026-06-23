import { conexao } from "../conexao.js";

async function editarIntegralmenteTelefone(infos, id){

    const sql = `UPDATE telefone_tbl SET ddd = ?, numero = ?, id_proprietario = ? WHERE id_telefone = ${id} ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {editarIntegralmenteTelefone}
