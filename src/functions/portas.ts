import PortaModel from '../model/PortaModel'

export const criarPortas = (qtde: number, comPresente: number): PortaModel[] => {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === comPresente
    return new PortaModel(numero, temPresente)
  })
}

export const atualizarPortas = (portas: PortaModel[], portaModificada: PortaModel) => {
  return portas.map(portaAtual => {
    const portaIgual = portaAtual.numero === portaModificada.numero;

    if (portaIgual) {
      return portaModificada
    } else {
      return portaAtual.aberta ? portaAtual : portaAtual.desselecionar()
    }
  })
}