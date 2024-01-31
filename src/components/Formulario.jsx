import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Formulario = () => {
  return (
    <section>
      <Card>
        <Card.Header as='h2' className='fw-bold fs-4 px-2'>Ingresa los datos de la película</Card.Header>
        <Card.Body>
          <Form className='d-flex flex-column'>
            <Form.Group controlId='nombre'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nombre de la película'
                minLength={2}
                maxLength={50}
                name='nombre'
                // value=''
                required
              />
            </Form.Group>
            
            <Form.Group controlId='descripcion'>
              <Form.Label>Descripción</Form.Label>
              <Form.Control 
                as='textarea'
              />
            </Form.Group>

            <Form.Group controlId='genero'>
              <Form.Label>Género</Form.Label>
              <Form.Select aria-label='opciones'>
                <option>Elija una opción</option>
                <option value="1">Comedia</option>
                <option value="2">Drama</option>
                <option value="3">Infantil</option>
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