import { conexao } from "../conexao.js";

async function editarParcialmenteTelefone(id, campo, valor){
    const realizarConexao = await conexao();
    const data = [valor, campo]
    const sql = `UPDATE telefone_tbl set ${campo} = ? WHERE id_telefone = ${id} ;`
    try{
        const colunasPermitidas = ['ddd', 'numero', 'id_proprietario']; 
        if (!colunasPermitidas.includes(campo)) {
            console.error('Coluna inválida');
            return;
        } else{
            const [results] = await realizarConexao.query(sql, data);
            return results;
        }
    } catch(error){
        console.error("Erro ao editar o número de telefone:", error);
    }
}

export {editarParcialmenteTelefone}
