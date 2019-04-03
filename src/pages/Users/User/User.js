import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  address: yup.string().required(),
  workProgress: yup.number().required(),
  task: yup.string().required(),
});

const initialUser = {
  id: '',
  name: '',
  address: '',
  workProgress: '',
  task: '',
};

export default class User extends Component {

  constructor(params) {
    super(params);
    this.state = {
      user: initialUser,
      userId: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.getUser(this.state.userId)
  }

  submitUserForm = data => {
    axios.patch(`/users`, data).then(() => {
      this.props.history.push('/users');
    })
  };

  getUser(userId) {
    axios.get(`/users/${userId}`)
      .then(response => {
        this.setState({
          user: response.data,
        })
      })
  }

  deleteUser(userId) {
    axios.delete(`/users/${userId}`)
      .then(() => this.props.history.push('/users'))
  }

  render() {
    return (
      <div className="mt-5 mb-5">
        <h2 className="ml-2">Edit Information about user</h2>
        <Container className="mt-5">
          <Row>
            <Col>
              <Formik
                validationSchema={schema}
                enableReinitialize
                onSubmit={this.submitUserForm}
                initialValues={this.state.user}
              >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                  }) => (
                  <Form
                    onSubmit={handleSubmit}>
                    <Form.Group controlId="userName">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Enter User Name"
                        isValid={touched.name && !errors.name}
                        isInvalid={touched.name && errors.name}
                      />
                    </Form.Group>

                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        placeholder="Address"
                        isValid={touched.address && !errors.address}
                        isInvalid={touched.address && errors.address}
                      />
                    </Form.Group>

                    <Form.Group controlId="userSkills">
                      <Form.Label>Work Progress</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.5"
                        max="100"
                        min="0"
                        name="workProgress"
                        value={values.workProgress}
                        onChange={handleChange}
                        placeholder="Work Progress"
                        isValid={touched.workProgress && !errors.workProgress}
                        isInvalid={touched.workProgress && errors.workProgress}
                      />
                    </Form.Group>

                    <Form.Group controlId="userSkills">
                      <Form.Label>Task</Form.Label>
                      <Form.Control
                        type="text"
                        name="task"
                        value={values.task}
                        onChange={handleChange}
                        placeholder="Task"
                        isValid={touched.task && !errors.task}
                        isInvalid={touched.task && errors.task}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Save
                    </Button>

                  </Form>
                )}
              </Formik>
            </Col>
            <Col>
              <Card style={{width: '20rem'}}>
                <Card.Img variant="top" src={`http://via.placeholder.com/250?text=${this.state.user.name.charAt(0)}`}/>
                <Card.Body>
                  <Card.Title>
                    {this.state.user.name}
                    <Button
                      variant="danger"
                      size="sm"
                      className="float-right"
                      onClick={() => this.deleteUser(this.state.userId)}
                    >
                      Delete user
                    </Button>
                  </Card.Title>
                  <Card.Text>
                    <strong>Address:</strong> {this.state.user.address} <br/>
                    <strong>Current Task:</strong> {this.state.user.task} <br/>
                    <strong>Work Progress:</strong> {this.state.user.workProgress}%
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

