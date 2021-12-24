import { Cliente } from './Cliente.js';

export class ContaCorrente {
    
    static numeroContas = 0;
    #cliente;    
    #agencia;
    #saldo = 0;

    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente) {
            this.#cliente = novoCliente;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    getSaldo(){
        return this.#saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas += 1;
    }

    saca(valor) {        
        if(valor < this.#saldo) {
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) return;

        this.#saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.saca(valor);
        conta.depositar(valorSacado);
    }

}