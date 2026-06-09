import {conexao} from "../conexao.js"

async function editarIntegralmenteRegistro(infos, codigo){
    const realizarConexao = await conexao()
    const sql = `UPDATE registro_tbl SET data_entrada = ?, data_saida = ?, id_proprietario = ?, id_vaga = ?, statusRegistro = ? WHERE codigo = ${codigo};`
    try{
        const [results] = await realizarConexao.query(sql, [...infos]);
        return results
    } catch(error){
        console.error("Erro ao editar o registro:", error);
    }
}

export {editarIntegralmenteRegistro}