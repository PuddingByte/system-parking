import {conexao} from '../conexao.js'

async function buscarVaga(){
  const realizarConexao = await conexao();
  try{
    const sql = `SELECT * FROM vaga_tbl`;

    const [rows] = await realizarConexao.query(sql);

    return rows;
  } catch(error){
    console.log("Erro ao buscar vagas" + error)
  }
}

async function buscarVagaPorId(id){
  const realizarConexao = await conexao();
  try{
    const sql = `SELECT * FROM vaga_tbl WHERE id_vaga = ?`;

    const [rows] = await realizarConexao.query(sql, [id]);

    return rows;
  } catch(error){
    console.log("Erro ao buscar vaga por id" + error)
  }
}

export {buscarVaga, buscarVagaPorId};