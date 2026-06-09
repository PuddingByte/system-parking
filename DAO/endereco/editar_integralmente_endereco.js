import {conexao} from "../conexao.js"

async function editarIntegralmenteEndereco(infos, codigo){
    const realizarConexao = await conexao()
    const sql = `UPDATE endereco_tbl SET cep = ?, numero = ?, rua = ?, bairro = ?, cidade = ?, estado = ? WHERE id_endereco = ${codigo};`
    try{
        const [results] = await realizarConexao.query(sql, [...infos]);
        return results
    } catch(error){
        console.error("Erro ao editar o endereço:", error);
    }
}

export {editarIntegralmenteEndereco}