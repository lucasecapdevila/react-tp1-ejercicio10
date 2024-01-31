import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Formulario = () => {
  return (
    <section>
      <Card>
        <Card.Header as='h2' className='fw-bold fs-4 px-2'>Ingresa los datos de la película</Card.Header>
        <Card.Body>
          <Form className='d-flex flex-column'>
            <Form.Group controlId=''>
              <Form.Label>Nombre</Form.Label>
              <Form.Control />
            </Form.Group>
            
            <Form.Group controlId=''>
              <Form.Label>Descripción</Form.Label>
              <Form.Control 
                as='textarea'
              />
            </Form.Group>

            <Form.Group controlId=''>
              <Form.Label>3</Form.Label>
              <Form.Select aria-label='Select'>
                <option>Elija una opción</option>
                <option value="1">asd1</option>
                <option value="2">asd2</option>
                <option value="3">asd3</option>
                <option value="4">asd4</option>
              </Form.Select>
            </Form.Group>
            
            <Button type='submit' variant='success' className='mt-2 align-self-end'>Agregar película</Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Formulario