import React, {useState} from 'react';
import Header from './componentes/Header';
import styled from '@emotion/styled'
import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';


function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    data: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  const [loading, setLoading] = useState(false)

  const { data, cotizacion } = resumen;

  return (
    <Contenedor className="App">
      <Header titulo='Cotizador de seguros'></Header>
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setLoading={setLoading}></Formulario>
        {loading ? <Spinner></Spinner> : null }
        <Resumen datos={data}></Resumen>
        { !loading ? <Resultado cotizacion={cotizacion}></Resultado> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: white;
  padding: 3rem;
`;

export default App;
