import Link from 'next/link';
import Cartao from '../components/Cartao'
import styles from '../styles/Home.module.css'
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';

export default function Home() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor='#c0392c'>
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text='Qtde portas?'
            value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text='Porta com presente?'
            value={comPresente} onChange={novoPresente => setComPresente(novoPresente)} />
        </Cartao>
        <Cartao bgcolor='#28a085'>
          <Link className={styles.link} href={`/jogo/${qtdePortas}/${comPresente}`}>
            Iniciar
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
