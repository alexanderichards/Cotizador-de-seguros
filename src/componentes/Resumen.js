import React from 'react'
import styled from '@emotion/styled'
import { primerMayuscula } from '../helper'
import PropTypes from 'prop-types';

const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos

    if (marca === '' || year === '' || plan === '') return null

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>

    )
}

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: white;
    margin-top: 1rem;
`

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen