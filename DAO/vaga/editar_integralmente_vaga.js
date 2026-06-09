import {conexao} from "../conexao.js"

async function editarIntegralmenteVaga(infos, codigo){
    const realizarConexao = await conexao()
    const sql = `UPDATE vaga_tbl SET statusVaga = ?, tipo = ? WHERE id_vaga = ${codigo};`
    try{
        const [results] = await realizarConexao.query(sql, [...infos]);
        return results
    } catch(error){
        console.error("Erro ao editar a vaga:", error);
    }
}

export {editarIntegralmenteVaga}