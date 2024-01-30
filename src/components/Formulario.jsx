import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const Formulario = () => {
  return (
    <section>
      <Card>
        <Card.Header as='h2' className='fw-bold fs-4 px-2'>Ingresa los datos de la película</Card.Header>
        <Card.Body className='d-flex flex-column'>
          <Form>
            <Button type='submit' variant='success' className='mt-2 align-self-end'>Agregar película</Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Formulario