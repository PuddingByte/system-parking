import {conexao} from '../conexao.js'

async function editarParcialmenteEndereco(codigo, campo, valor){
    const realizarConexao = await conexao();
    const data = [valor, codigo]
    try{
        const colunasPermitidas = ['rua', 'numero', 'bairro', 'cidade', 'estado', 'cep']; 
        if (!colunasPermitidas.includes(campo)) {
            console.error('Coluna inválida');
            return;
        } else{
            const sql = `UPDATE tbl_endereco set ${campo} = ? WHERE id_endereco = ? ;`
            const [results] = await realizarConexao.query(sql, data);
            return results;
        }
    } catch(error){
        console.error("Erro ao editar o endereço:", error);
    }
}

export {editarParcialmenteEndereco};