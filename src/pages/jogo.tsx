import Porta from '../components/Porta'
import styles from '../styles/Jogo.module.css'
import { useState } from 'react';
import { atualizarPortas, criarPortas } from '../functions/portas';
import Link from 'next/link';

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(10, 1))

  const renderizarPortas = () => {
    return portas.map(porta => <Porta key={porta.numero} value={porta}
      onChange={portaAtual => setPortas(atualizarPortas(portas, portaAtual))} />)
  }
  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
