import {conexao} from '../conexao.js'

async function editarParcialmenteVaga(codigo, campo, valor){
    const realizarConexao = await conexao();
    const data = [valor, codigo]
    const sql = `UPDATE tbl_vaga set ${campo} = ? WHERE id_vaga = ? ;`
    try{
        const colunasPermitidas = ['statusVaga', 'tipo']; 
        if (!colunasPermitidas.includes(campo)) {
            console.error('Coluna inválida');
            return;
        } else{
            const [results] = await realizarConexao.query(sql, data);
            return results;
        }
    } catch(error){
        console.error("Erro ao editar a vaga:", error);
    }
}

export {editarParcialmenteVaga};