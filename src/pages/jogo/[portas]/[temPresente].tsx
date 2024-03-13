import Porta from '../../../components/Porta'
import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from 'react';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Jogo() {
  const router = useRouter()

  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)

  useEffect(() => {
    setPortas(criarPortas(+router.query.portas, +router.query.temPresente))
  }, [router.query])

  useEffect(() => {
    const qtdePortas = +router.query.portas
    const temPresente = +router.query.temPresente
    const portasValidas = qtdePortas >= 3 && qtdePortas <= 100;
    const presenteValido = temPresente > 0 && temPresente <= qtdePortas

    setValido(portasValidas && presenteValido)
  }, [portas])

  const renderizarPortas = () => {
    return portas.map(porta => <Porta key={porta.numero} value={porta}
      onChange={portaAtual => setPortas(atualizarPortas(portas, portaAtual))} />)
  }
  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() :
          <h2>Valores invalidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
