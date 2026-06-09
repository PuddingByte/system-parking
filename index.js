import express from 'express';
import {testarConexao} from "./DAO/conexao.js";
import cors from "cors";

const door = 3000;

const app = express();

app.use(express.json(), cors());

//Importações do roteador
//Registros
import buscarRegistros from "./routes/consultas/consultasRegistro-route.js";
import deletarRegistro from "./routes/deletes/deletar_registro.js";
import adicionarRegistro from "./routes/posts/adicionar_registro.js";

//Endereços
import buscarEnderecos from "./routes/consultas/consultasEndereco-route.js";
import deletarEndereco from "./routes/deletes/deletar_endereco.js";
import adicionarEndereco from "./routes/posts/adicionar_endereco.js";
import editarTotalmenteEndereco from "./routes/puts/editar_totalmente_endereco.js";
import editarParcialmenteEndereco from "./routes/patchs/editar_parcialmente_endereco.js";

//Vagas
import buscarVagas from "./routes/consultas/consultasVagas-route.js";
import deletarVaga from "./routes/deletes/deletar_vaga.js";
import adicionarVaga from "./routes/posts/adicionar_vaga.js";

//Veículos
import buscarVeiculos from "./routes/consultas/consultaVeiculo.js";

//Telefones
import buscarTelefones from "./routes/consultas/consultaTelefone.js";

//Motoristas


app.get('/', (req, res) =>{
    res.json('Olá, Mundo!')
});

app.use('/BuscarRegistro', buscarRegistros);
app.use('/DeletarRegistro', deletarRegistro);
app.use('/AdicionarRegistro', adicionarRegistro);

app.use('/BuscarEndereco', buscarEnderecos);
app.use('/DeletarEndereco', deletarEndereco);
app.use('/AdicionarEndereco', adicionarEndereco);
app.use('/EditarTotalmenteEndereco', editarTotalmenteEndereco);
app.use('/EditarParcialmenteEndereco', editarParcialmenteEndereco);

app.use('/BuscarVaga', buscarVagas);
app.use('/DeletarVaga', deletarVaga);
app.use('/AdicionarVaga', adicionarVaga);

app.use('/BuscarVeiculo', buscarVeiculos);

app.use('/BuscarTelefone', buscarTelefones);

app.listen(door, () => {
    testarConexao();
    console.log('Server is running on http://localhost:3000');
});
