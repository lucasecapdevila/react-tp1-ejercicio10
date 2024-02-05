import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import ListaPeliculas from './components/ListaPeliculas'
import { useEffect, useState } from 'react'

function App() {
  const listaPeliculasLS = JSON.parse(localStorage.getItem('peliculas')) || []
  const [listaPeliculas, setListaPeliculas] = useState(listaPeliculasLS)

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(listaPeliculas))
  }, [listaPeliculas])

  const crearPelicula = (pelicula) => {
    setListaPeliculas([...listaPeliculas, pelicula])
  }

  const eliminarPelicula = (id) => {
    const copiaPeliculas = listaPeliculas.filter(pelicula => pelicula.id !== id)
    setListaPeliculas(copiaPeliculas)
  }

  return (
    <>
      <main className='my-4 mainPage'>
        <Container>
          <h1 className='text-center display-3'>Alta de Películas</h1>
          <Formulario
            crearPelicula={crearPelicula}
          />
          <ListaPeliculas
            peliculasProp={listaPeliculas}
            eliminarPelicula={eliminarPelicula}
          />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
