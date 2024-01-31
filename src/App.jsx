import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import ListaPeliculas from './components/ListaPeliculas'

function App() {
  return (
    <>
      <main className='my-4 mainPage'>
        <Container>
          <h1 className='text-center display-3'>Alta de Películas</h1>
          <Formulario />
          <ListaPeliculas />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
