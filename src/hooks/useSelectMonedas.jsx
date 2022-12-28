import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin: 15px 0;
    font-size: 24px;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
`

const useSelectMonedas = (titulo, opciones) => {

    //¿Por qué un nombre tan genérico? Porque la idea es que este componente sea reutilizable en un futuro y no sabemso que uso se les va a dar
    const[state, setState] = useState('');

    const SelectMonedas = ()=> (
        <>
            <Label>{titulo}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value=''>Seleccione</option>

                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </>
    )

  return[ state, SelectMonedas ]
}

export default useSelectMonedas