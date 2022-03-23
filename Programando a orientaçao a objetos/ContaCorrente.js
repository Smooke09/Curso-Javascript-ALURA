import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    // isso nao e um metodo e um acessor
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
        // this serve para ser o saldo da conta corrente que eu esteja mechendo nao importa qual seja
    }



    // isso nao e um metodo e um acessor
    get cliente() {
        return this._cliente;
    }


    get saldo() {
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }




    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}