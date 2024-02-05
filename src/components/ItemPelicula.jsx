import { Button, Card } from 'react-bootstrap'

const ItemPelicula = ({pelicula, eliminarPelicula}) => {
  return (
    <article className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column'>
      <Card className='my-2'>
        <Card.Header className='d-flex flex-column align-items-center'>
          <h4>{pelicula.nombrePelicula}</h4>
          <img className='imgPelicula' src='../../public/cine.webp' />
        </Card.Header>
        <Card.Body>
          <p className='fw-bold'>{pelicula.genero}</p>
          <p className='lead'>{pelicula.descripcion}</p>
        </Card.Body>
        <Button variant='danger' className='ms-auto me-3 mb-2' onClick={() => eliminarPelicula(pelicula.id)}>Eliminar</Button>
      </Card>
    </article>
  )
}

export default ItemPelicula