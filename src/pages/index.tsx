import Presente from '../components/Presente'
import Porta from '../components/Porta'
import PortaModel from '../model/PortaModel'
import { useState } from 'react';

export default function Home() {
  const [p1, setPorta] = useState(new PortaModel(1))
  return (
    <div>
      {/* <Presente /> */}
      <Porta value={p1} onChange={(novaPorta) => setPorta(novaPorta)} />
    </div>
  );
}
