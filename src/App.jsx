import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main className='my-4 mainPage'>
        <Container>
          <h1>Hola mundo !</h1>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
