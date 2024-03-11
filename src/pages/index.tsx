import Presente from '../components/Presente'
import Porta from '../components/Porta'
import PortaModel from '../model/PortaModel'
import { useState } from 'react';
import { atualizarPortas, criarPortas } from '../functions/portas';

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 1))

  const renderizarPortas = () => {
    return portas.map(porta => <Porta key={porta.numero} value={porta} onChange={portaAtual => setPortas(atualizarPortas(portas, portaAtual))} />)
  }
  return (
    <div style={{ display: 'flex' }}>
      {/* <Presente /> */}
      {renderizarPortas()}
    </div>
  );
}
