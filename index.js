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
import editarTotalmenteRegistro from "./routes/puts/editar_totalmente_registro.js";
import editarParcialmenteRegistro from "./routes/patchs/editar_parcialmente_registro.js";

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
import editarTotalmenteVaga from "./routes/puts/editar_totalmente_vaga.js";
import editarParcialmenteVaga from "./routes/patchs/editar_parcialmente_vaga.js";

//Veículos
import buscarVeiculos from "./routes/consultas/consultaVeiculo.js";
import deletarVeiculo from "./routes/deletes/deletar_veiculo.js";
import adicionarVeiculo from "./routes/posts/adicionar_veiculo.js";
import editarTotalmenteVeiculo from "./routes/puts/editar_totalmente_veiculo.js";
import editarParcialmenteVeiculo from "./routes/patchs/editar_parcialmente_veiculo.js"

//Telefones
import buscarTelefones from "./routes/consultas/consultaTelefone.js";
import deletarTelefone from "./routes/deletes/deletar_telefone.js";
import adicionarTelefone from "./routes/posts/adicionar_telefone.js";
import editarTotalmenteTelefone from "./routes/puts/editar_totalmente_telefone.js";
import editarParcialmenteTelefone from "./routes/patchs/editar_parcialmente_telefone.js";

//Motoristas
import buscarMotoristas from "./routes/consultas/consultaMotorista.js";
import deletarMotoristas from "./routes/deletes/deletar_proprietario.js";
import adicionarMotoristas from "./routes/posts/adicionar_proprietario.js";
import editarTotalmenteMotoristas from "./routes/puts/editar_totalmente_proprietario.js";
import editarParcialmenteMotoristas from "./routes/patchs/editar_parcialmente_motorista.js";

app.get('/', (req, res) =>{
    res.json('Olá, Mundo!')
});

app.use('/BuscarRegistro', buscarRegistros);
app.use('/DeletarRegistro', deletarRegistro);
app.use('/AdicionarRegistro', adicionarRegistro);
app.use('/EditarTotalmenteRegistro', editarTotalmenteRegistro);
app.use('/EditarParcialmenteRegistro', editarParcialmenteRegistro);

app.use('/BuscarEndereco', buscarEnderecos);
app.use('/DeletarEndereco', deletarEndereco);
app.use('/AdicionarEndereco', adicionarEndereco);
app.use('/EditarTotalmenteEndereco', editarTotalmenteEndereco);
app.use('/EditarParcialmenteEndereco', editarParcialmenteEndereco);

app.use('/BuscarVaga', buscarVagas);
app.use('/DeletarVaga', deletarVaga);
app.use('/AdicionarVaga', adicionarVaga);
app.use('/EditarTotalmenteVaga', editarTotalmenteVaga);
app.use('/EditarParcialmenteVaga', editarParcialmenteVaga);

app.use('/BuscarVeiculo', buscarVeiculos);
app.use('/DeletarVeiculo', deletarVeiculo);
app.use('/AdicionarVeiculo', adicionarVeiculo);
app.use('/EditarTotalmenteVeiculo', editarTotalmenteVeiculo);
app.use('/EditarParcialmenteVeiculo', editarParcialmenteVeiculo);

app.use('/BuscarTelefone', buscarTelefones);
app.use('/DeletarTelefone', deletarTelefone);
app.use('/AdicionarTelefone', adicionarTelefone);
app.use('/EditarTotalmenteTelefone', editarTotalmenteTelefone);
app.use('/EditarParcialmenteTelefone', editarParcialmenteTelefone);

app.use('/BuscarProprietario', buscarMotoristas);
app.use('/DeletarProprietario', deletarMotoristas);
app.use('/AdicionarProprietario', adicionarMotoristas);
app.use('/EditarTotalmenteProprietario', editarTotalmenteMotoristas);
app.use('/EditarParcialmenteProprietario', editarParcialmenteMotoristas);

app.listen(door, () => {
    testarConexao();
    console.log('Server is running on http://localhost:3000');
});
