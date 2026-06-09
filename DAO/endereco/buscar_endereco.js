import { conexao } from "../conexao.js";

async function buscarEndereco() {
  const realizarConexao = await conexao();

  try {
    const sql = `SELECT * FROM endereco_tbl`
    const [rows] =  await realizarConexao.query(sql)

    return rows
  } catch (error) {
    console.error("Erro ao consultar a tabela de endereço" + error)
  }
}

async function buscarEnderecoPorId(id){
  const realizarConexao = await conexao();
  const sql = `SELECT * FROM endereco_tbl WHERE id_endereco = ?`;
  try{
    const [rows] = await realizarConexao.query(sql, [id]);
    return rows;
  } catch(error){
    console.error("Erro ao consultar o endereço por ID" + error)
  }
}

export {buscarEndereco, buscarEnderecoPorId};