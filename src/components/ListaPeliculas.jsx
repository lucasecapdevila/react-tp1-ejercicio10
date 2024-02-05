import ItemPelicula from './ItemPelicula'

const ListaPeliculas = ({peliculasProp, eliminarPelicula}) => {
  const titulo = peliculasProp.length === 0 ? 'No hay películas en este momento.' : 'Películas agregadas'

  return (
    <section className='mt-2 row'>
      <h2 className='text-center display-4'>{titulo}</h2>
      {peliculasProp.map((pelicula, posicionPelicula) => <ItemPelicula key={posicionPelicula} pelicula={pelicula} eliminarPelicula={eliminarPelicula} />)} 
    </section>
  )
}

export default ListaPeliculas