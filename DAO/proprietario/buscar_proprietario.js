import { conexao } from "../conexao.js";

async function buscarProprietario() {
  const realizarConexao = await conexao();

  try {
    const sql = `SELECT * FROM proprietario_tbl`
    const [rows] =  await realizarConexao.query(sql)

    return rows
  } catch (error) {
    console.error("Erro ao consultar a tabela de proprietario" + error)
  }
}

async function buscarPropietarioPorCpf(cpf){
  const realizarConexao = await conexao();
  const sql = `SELECT * FROM proprietario_tbl WHERE cpf = ?`;
  try{
    const [rows] = await realizarConexao.query(sql, [cpf]);
    return rows;
  } catch(error){
    console.error("Erro ao consultar o endereço por CPF" + error)
  }
}

export {buscarProprietario, buscarPropietarioPorCpf};