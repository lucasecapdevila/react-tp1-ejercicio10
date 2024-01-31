import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ItemPelicula = () => {
  return (
    <article className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column'>
      <Card className='my-2'>
        <Card.Header className='d-flex flex-column align-items-center'>
          <h4>Película</h4>
          <img className='imgPelicula' src='../../public/cine.webp' />
        </Card.Header>
        <Card.Body>
          <p className='fw-bold'>Género</p>
          <p className='lead'>Descripción</p>
        </Card.Body>
        <Button variant='danger' className='ms-auto me-3 mb-2'>Eliminar</Button>
      </Card>
    </article>
  )
}

export default ItemPelicula