import React, {useState} from 'react';
import './App.css';

function App() {
  // CONVERSOR DE MONEDAS.

  const cambios=[
    {
      moneda: "Peso mexicano",
      cambio:1,
    },{
      moneda: "Dolar",
      cambio:0.049,
    },{
      moneda: "Euro",
      cambio:0.043,
    },{
      moneda: "Yen",
      cambio:5.59,
    }
  ];

  const [mxn,setMXN] = useState();
  const [usd,setUSD] = useState(0);
  const [eur,setEUR] = useState(0);
  const [yen,setYEN] = useState(0);

  const modificar = e => {
    setMXN(e.target.value);
    setUSD((e.target.value * cambios[1].cambio).toFixed(2));
    setEUR((e.target.value * cambios[2].cambio).toFixed(2));
    setYEN((e.target.value * cambios[3].cambio).toFixed(2));
  }

  return (
    <div className="App">
      <div>
        <h1>Conversor de monedas</h1>
        <form>
          <input id="MXN" type="number" value={mxn} onChange={modificar}/>
          <label htmlFor='MXN'>Peso mexicano (MXN)</label>
          <input id="USD" type="number" value={usd} readOnly/>
          <label htmlFor='USD'>Dolar ($) 💵</label>
          <input id="EURO" type="number" value={eur} readOnly/>
          <label htmlFor='EURO'>EURO (€) 💶</label>
          <input id="YEN" type="number" value={yen} readOnly/>
          <label htmlFor='YEN'>Yen (¥) 💴</label>
        </form>
      </div>
    </div>
  );
}

export default App;
