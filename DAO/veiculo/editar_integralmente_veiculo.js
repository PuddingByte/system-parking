import { conexao } from "../conexao.js";

async function editarIntegralmenteVeiculo(insfos, placa){

    const sql = `UPDATE veiculo_tbl SET placa = ?, modelo = ?, ano = ?, cor = ?, marca = ? WHERE placa = ${placa} ;`
    const conn = await conexao()
    
    try {
        const [results] = await conn.query(sql,[...infos]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {editarIntegralmenteVeiculo}
