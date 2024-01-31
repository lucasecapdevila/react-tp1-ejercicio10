import React from 'react'
import ItemPelicula from './ItemPelicula'

const ListaPeliculas = () => {
  return (
    <section className='mt-2 row'>
      <h2 className='text-center display-4'>Películas agregadas</h2>
      <ItemPelicula />
    </section>
  )
}

export default ListaPeliculas