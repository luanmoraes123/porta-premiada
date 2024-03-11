export default class Pessoa {
  #numero
  #aberta
  #presente
  #selecionada

  constructor(numero, aberta = false, presente = false, selecionada = false) {
    this.#numero = numero
    this.#aberta = aberta
    this.#presente = presente
    this.#selecionada = selecionada
  }

  get aberta() {
    return this.#aberta
  }

  get numero() {
    return this.#numero
  }

  get presente() {
    return this.#presente
  }

  get selecionada() {
    return this.#selecionada
  }

  desselecionar() {
    const selecionada = false
    return new Porta(this.numero, this.aberta, this.presente, selecionada)
  }

  alternarSelecao() {
    const selecionada = !this.#selecionada
    return new Porta(this.numero, this.aberta, this.presente, selecionada)
  }

  abrir() {
    const aberta = true
    return new Porta(this.numero, aberta, this.presente, this.selecionada)
  }
}