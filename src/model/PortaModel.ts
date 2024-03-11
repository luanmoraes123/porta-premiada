export default class PortaModel {
  #numero: number
  #aberta: boolean
  #presente: boolean
  #selecionada: boolean

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
    return new PortaModel(this.numero, this.aberta, this.presente, selecionada)
  }

  alternarSelecao() {
    const selecionada = !this.#selecionada
    return new PortaModel(this.numero, this.aberta, this.presente, selecionada)
  }

  abrir() {
    const aberta = true
    return new PortaModel(this.numero, aberta, this.presente, this.selecionada)
  }
}