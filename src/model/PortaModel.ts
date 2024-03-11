export default class PortaModel {
  #numero: number
  #aberta: boolean
  #presente: boolean
  #selecionada: boolean

  constructor(numero, presente = false, aberta = false, selecionada = false) {
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
    return new PortaModel(this.numero, this.presente, this.aberta, selecionada)
  }

  alternarSelecao() {
    const selecionada = !this.#selecionada
    return new PortaModel(this.numero, this.presente, this.aberta, selecionada)
  }

  abrir() {
    const aberta = true
    return new PortaModel(this.numero, this.presente, aberta, this.selecionada)
  }
}