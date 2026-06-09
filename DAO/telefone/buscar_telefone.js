import {conexao} from "../conexao.js";

export async function buscarTelefone(){
  const realizarConexao = await conexao();
  try{
    const sql = `SELECT * FROM telefone_tbl`;
    const [rows] = await realizarConexao.query(sql);
    return rows;
  } catch(error){
      console.error("Erro ao buscar telefone:", error);
  }
}