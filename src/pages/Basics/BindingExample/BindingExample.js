import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default class BindingExample extends Component {

  state = {
    hello: 'Hello!',
  };

  handleHelloChange = (event) => {
    this.setState({hello: event.target.value})
  };

  render() {
    return (
        <Card className="mt-5">
          <Card.Header>
            Values (state) binding
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={3}>
                {this.state.hello}
              </Col>
              <Col xs={3}>
                <div children={this.state.hello}/>
              </Col>
              <Col xs={3}>
                <Form>
                  <Form.Group controlId="hello-input">
                    <Form.Control onChange={this.handleHelloChange} value={this.state.hello} type="text"
                                  placeholder="value"/>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={3}>
                {this.state.hello.toUpperCase() || ''}
              </Col>
            </Row>
          </Card.Body>
        </Card>
    )
  }
}
