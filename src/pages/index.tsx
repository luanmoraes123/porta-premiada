import Link from 'next/link';
import Cartao from '../components/Cartao'
import styles from '../styles/Home.module.css'
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';

export default function Home() {

  const [qtdePortas, setQtdePortas] = useState(3)

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
        <Cartao></Cartao>
        <Cartao bgcolor='#28a085'>
          <Link className={styles.link} href={`/jogo/4/3`}>
            Iniciar
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
