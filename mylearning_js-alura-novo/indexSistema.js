import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("joão", 10000, 12345678999);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("jose", 50000, 12345678900);
gerente.cadastrarSenha("123");

const estadoLogadoDiretor = SistemaAutenticacao.login(diretor, "12345");
console.log(estadoLogadoDiretor);

const estadoLogadoGerente = SistemaAutenticacao.login(gerente, "123");
console.log(estadoLogadoGerente);

const cliente = new Cliente("joana", 12345678900, "456");
const estadoLogadoCliente = SistemaAutenticacao.login(cliente, "456");
console.log(estadoLogadoCliente);