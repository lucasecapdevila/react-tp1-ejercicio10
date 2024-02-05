import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Formulario = ({crearPelicula}) => {
  const [pelicula, setPelicula] = useState({
    nombrePelicula: '',
    descripcion: '',
    genero: ''
  })
  
  const handleNombreChange = (e) => {
    setPelicula({...pelicula, nombrePelicula: e.target.value})
  }
  
  const handleDescripcionChange = (e) => {
    setPelicula({...pelicula, descripcion: e.target.value})
  }
  
  const handleGeneroChange = (e) => {
    setPelicula({...pelicula, genero: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    crearPelicula(pelicula)
    setPelicula({
      nombrePelicula: '',
      descripcion: '',
      genero: 'Elija una opción'
    })
  }

  return (
    <section>
      <Card>
        <Card.Header as='h2' className='fw-bold fs-4 px-2'>Ingresa los datos de la película</Card.Header>
        <Card.Body>
          <Form className='d-flex flex-column' onSubmit={handleSubmit}>
            <Form.Group controlId='nombre'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nombre de la película'
                minLength={2}
                maxLength={50}
                name='nombre'
                value={pelicula.nombrePelicula}
                onChange={handleNombreChange}
                required
              />
            </Form.Group>
            
            <Form.Group controlId='descripcion'>
              <Form.Label>Descripción</Form.Label>
              <Form.Control 
                as='textarea'
                type='text'
                placeholder='Ingrese una breve descripción de la película'
                minLength={10}
                maxLength={100}
                name='descripcion'
                value={pelicula.descripcion}
                onChange={handleDescripcionChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='genero'>
              <Form.Label>Género</Form.Label>
              <Form.Select
                aria-label='opciones'
                onChange={handleGeneroChange}
              >
                <option defaultValue='Elija una opción'>Elija una opción</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Infantil">Infantil</option>
              </Form.Select>
            </Form.Group>
            
            <Button type='submit' variant='success' className='mt-3 align-self-end'>Agregar película</Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Formulario