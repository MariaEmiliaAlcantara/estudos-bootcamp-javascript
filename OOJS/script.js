class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valueSaldo) {
    this._saldo = valueSaldo;
  }

  sacar(valueSacar) {
    if (valueSacar <= this._saldo) {
      this._saldo = this._saldo - valueSacar;
      console.log(`Valor sacado com sucesso. Saldo: ${this._saldo}`);
    } else {
      console.log("Saque indisponivel");
    }
  }

  depositar(valueDeposito) {
    this._saldo = this._saldo + valueDeposito;
    console.log(`Depósito realizado. Saldo: ${this._saldo}`);
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valueCartaoCredito) {
    this._cartaoCredito = valueCartaoCredito;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitaria";
  }

  sacar(value) {
    if (value > 500) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;
  }
}
