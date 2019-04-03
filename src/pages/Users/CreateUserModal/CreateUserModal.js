import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import * as PropTypes from 'prop-types';


const schema = yup.object({
  name: yup.string().required(),
  address: yup.string().required(),
  workProgress: yup.number().required(),
  task: yup.string().required(),
});


class CreateUserModal extends React.Component {

  state = {
    show: false,
  };

  constructor(props, context) {
    super(props, context);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  submitCreateUserForm = data => {
    axios.post(`/users`, data)
      .then(() => this.props.onReloadUserList())
      .then(() => {this.handleClose()})
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="success" onClick={this.handleShow}>
          Create User
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Formik
              validationSchema={schema}
              onSubmit={this.submitCreateUserForm}
              initialValues={{
                name: '',
                address: '',
                workProgress: Number(0),
                task: ''
              }}
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
                <Form onSubmit={handleSubmit}>
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
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}
CreateUserModal.propTypes = {
  onReloadUserList: PropTypes.func,

};
export default CreateUserModal;