import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CreateUserModal from '../CreateUserModal';


export default class User extends Component {

 render() {
  return (
    <div className="mt-5 mb-5">

     <h2 className="ml-2">Edit Information about user</h2>
     <Container className="mt-5">
      <Row>
       <Col>
        <Form>
         <Form.Group controlId="userName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User Name" />
         </Form.Group>

         <Form.Group controlId="userAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
         </Form.Group>

         <Form.Group controlId="userSkills">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Age" />
         </Form.Group>

         <Form.Group controlId="userSkills">
          <Form.Label>Direction Skill</Form.Label>
          <Form.Control type="text" placeholder="Skills" />
         </Form.Group>

         <Form.Group controlId="skillQuality">
          <Form.Label>Direction Skill</Form.Label>
          <Form.Control type="number" placeholder="Skill quality" />
         </Form.Group>

         <Button variant="primary" type="submit">
          Submit
         </Button>
        </Form>

       </Col>
       <Col>

        <Card style={{ width: '25rem' }}>
         <Card.Img variant="top" src="https://image.freepik.com/free-icon/avatar-of-a-person-with-dark-short-hair_318-68905.jpg" />
         <Card.Body>
          <Card.Title>Jakiś User</Card.Title>
          <Card.Text>
           User Lorem Ipsum Lorem Lorem Lorem
          </Card.Text>
          <Button variant="danger" onClick={() => alert('Usunięto użytkownika')}>Delete User</Button>
         </Card.Body>
        </Card>;

       </Col>
      </Row>
     </Container>;

    </div>
  );
 }
}

