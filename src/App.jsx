import {Form, Button, Container} from "react-bootstrap";


function App() {
  return (
    <Container className="mt-5">
      <h1 className="display-5 fw-lighter text-center">Formulario</h1>
  <Form>
    <Form.Group className="mb-3" controlId="nombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="Ingresa Tu Nombre" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="apellidoo">
      <Form.Label>Apellido</Form.Label>
      <Form.Control type="text" placeholder="Ingresa Tu Apellido" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="dni">
      <Form.Label>DNI</Form.Label>
      <Form.Control type="number" placeholder="Ingresa Tu DNI" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="email">
      <Form.Label>EMAIL</Form.Label>
      <Form.Control type="email" placeholder="Ingresa Tu email" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Ingresar
    </Button>
  </Form>
    </Container>
  );
}

export default App;
