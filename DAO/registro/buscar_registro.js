import {conexao} from "../conexao.js";

async function buscarRegistro(){
  const realizarConexao = await conexao();

  try{
    const sql = `SELECT * FROM registro_tbl`;
  
    const [rows] = await realizarConexao.query(sql);
  
    return rows;
  } catch(error){
    console.error("Erro ao fazer consulta dos registros:" + error)
    
  }
};

async function buscarRegistroPorId(id){
  const realizarConexao = await conexao();
  try{

    const sql = `SELECT * FROM registro_tbl WHERE codigo = ?`;
    const [rows] = await realizarConexao.query(sql, [id]);
    return rows;
    
  } catch(error){
      console.error("Erro ao fazer consulta do registro por ID:" + error)
  }
}

export {buscarRegistro, buscarRegistroPorId}