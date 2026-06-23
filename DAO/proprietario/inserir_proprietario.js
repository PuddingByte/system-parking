import { conexao } from "../conexao.js";

async function incluirCliente(infos) {
  //const data = [infos]
  const sql = `INSERT INTO proprietario_tbl (cpf, nome, email, genero, placa_veiculo) VALUES (?,?,?,?,?)`
  const conn = await conexao()

  try {
    // Executar a consulta
    const params = [
      infos.cpf, 
      infos.nome, 
      infos.email, 
      infos.genero, 
      infos.placa_veiculo
    ]
    const [results] = await conn.query(sql, params);
    await conn.end()
    return results
  } catch (err) {
    return err.message
  }
}

export { incluirCliente }
