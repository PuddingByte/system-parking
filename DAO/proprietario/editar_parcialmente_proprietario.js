import { conexao } from "../conexao.js";

async function editarParcialmenteCliente(codigo, campo, valor){
    const data = [valor, campo]
    
    const colunasPermitidas = ['cpf', 'nome', 'email', 'genero', 'placa_veiculo']; // Adicione as colunas permitidas
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE proprietario_tbl set ${campo} = ? WHERE codigo = ${codigo} ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {editarParcialmenteCliente}
