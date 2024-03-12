import Porta from '../../../components/Porta'
import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from 'react';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([])

  useEffect(() => {
    setPortas(criarPortas(+router.query.portas, +router.query.temPresente))
  }, [router.query])

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
