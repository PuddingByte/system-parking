import {conexao} from '../conexao.js'

async function editarParcialmenteRegistro(codigo, campo, valor){
    const realizarConexao = await conexao();
    const data = [valor, codigo]
    const sql = `UPDATE tbl_registro set ${campo} = ? WHERE id_registro = ? ;`
    try{
        const colunasPermitidas = ['status', 'tipo']; 
        if (!colunasPermitidas.includes(campo)) {
            console.error('Coluna inválida');
            return;
        } else{
            const [results] = await realizarConexao.query(sql, data);
            return results;
        }
    } catch(error){
        console.error("Erro ao editar o registro:", error);
    }
}

export {editarParcialmenteRegistro};