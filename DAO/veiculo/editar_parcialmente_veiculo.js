import { conexao } from "../conexao.js";

async function editarParcialmenteVeiculo(placa, campo, valor){
    const realizarConexao = await conexao();
    const data = [valor, placa]
    const sql = `UPDATE veiculo_tbl set ${campo} = ? WHERE placa = ? ;`
    try{
        const colunasPermitidas = ['placa', 'modelo', 'ano', 'cor', 'marca']; 
        if (!colunasPermitidas.includes(campo)) {
            console.error('Coluna inválida');
            return;
        } else{
            const [results] = await realizarConexao.query(sql, data);
            return results;
        }
    } catch(error){
        console.error("Erro ao editar o veiculo:", error);
    }
}

export {editarParcialmenteVeiculo}
