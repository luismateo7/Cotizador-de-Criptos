import { useState } from 'react'
import Formulario from './components/Formulario'
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

  return (
    <div className="App">
      <Contenedor>
        <Imagen
          src={ImagenCripto}
          alt='Imagen de Criptomonedas'
        />
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario />
        </div>
      </Contenedor>
    </div>
  )
}

export default App
