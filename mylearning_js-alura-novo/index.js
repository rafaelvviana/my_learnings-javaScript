import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

/// INSTANCIAR CLIENTES
const cliente1 = new Cliente("Rafael", 12345678900);
const cliente2 = new Cliente("Andreia", 12345678901);

// INSTANCIAR CONTAS
const contaCorrenteRafael = new ContaCorrente(1001, cliente1);
const contaCorrenteAndreia = new ContaCorrente(1002, cliente2);

/// MOVIMENTAÇÕES
contaCorrenteRafael.depositar(500);
contaCorrenteRafael.saca(100);
contaCorrenteRafael.depositar(-500);
//
contaCorrenteAndreia.depositar(100);
//
contaCorrenteRafael.transferir(200, contaCorrenteAndreia);

/// IMPRIMIR
console.log(contaCorrenteRafael);
console.log(`Cliente: ${contaCorrenteRafael.cliente.nome} e CPF: ${contaCorrenteRafael.cliente.cpf}`);
console.log(contaCorrenteRafael.cliente);
console.log(`Saldo Rafael: ${contaCorrenteRafael.getSaldo()}`)

console.log(contaCorrenteAndreia);
console.log(`Cliente: ${contaCorrenteAndreia.cliente.nome} e CPF: ${contaCorrenteAndreia.cliente.cpf}`);
console.log(contaCorrenteAndreia.cliente);
console.log(`Saldo Andreia: ${contaCorrenteAndreia.getSaldo()}`)

console.log(`Numero de Contas: ${ContaCorrente.numeroContas}`);