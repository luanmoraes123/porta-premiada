import Link from 'next/link';
import Cartao from '../components/Cartao'
import styles from '../styles/home.module.css'

export default function Home() {

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor='#c0392c'>
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
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
