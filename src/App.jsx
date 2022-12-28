import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  width: 80%;
  display: block;
  max-width: 400px;
  margin: 100px auto 0 auto;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
	color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;  
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {

  const[ monedas, setMonedas ] = useState({});
  const[ resultado, setResultado] = useState({});

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){

      const cotizarCripto = async()=>{
        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado.DISPLAY[criptomoneda][moneda]) //Busca en este objeto alguna propiedad que haga match con la cripto y la moneda
      }
      cotizarCripto();
    }
  }, [monedas])

  return (
    <div className="App">
      <Contenedor>
        <Imagen
          src={ImagenCripto}
          alt='Imagen de Criptomonedas'
        />
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario
            setMonedas={setMonedas}
          />
          {resultado.PRICE && <Resultado resultado={resultado}/>}
        </div>
      </Contenedor>
    </div>
  )
}

export default App
