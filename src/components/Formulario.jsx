import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const emailRegexp = new RegExp(/^[^@\s]+@[^@\s]+\.(com|net|org|gov)$/);

    const handleChange = (e)=>{
      e.preventDefault();
      if(nombre.trim() === ''|| !emailRegexp.test(email)){
        Swal.fire(`Los datos ingresados son incorrectos`)
        return
      }else{
        setNombre(''); setApellido(''); setDni('');setEmail('');
        Swal.fire(`Los datos guardados son: ${nombre}, ${apellido}, ${dni} y ${email}`)
      }
    }
    return (
        <Container>
        <h1 className="text-center display-5 my-5">Formulario</h1>
        <hr />
        <Form onSubmit={handleChange}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} name={nombre} onChange={e=> setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su apellido" value={apellido} name={apellido} onChange={e=> setApellido(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="Ingrese su DNI" value={dni} name={dni} onChange={e=> setDni(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="jochydaoua@gmail.com"
            value={email} name={email} onChange={e=> setEmail(e.target.value)} />
          </Form.Group>
          <Button variant="warning" type="submit">
            Enviar
          </Button>
        </Form>
        </Container>
    );
};

export default Formulario;