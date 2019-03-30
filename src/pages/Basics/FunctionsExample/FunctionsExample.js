import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default class FunctionsExample extends Component {

  state = {
    time: moment().toISOString(),
    yearsCount: null
  };

  handleTimeChange = (time) => {
    this.setState({time})
  };

  handleResetTime = () => {
    this.handleTimeChange(moment().toISOString());
  };

  handleYearChange = (event) => {
    this.setState({yearsCount: event.target.value})
  };

  handleYearAddition = (count) => {
    this.setState(previousState => ({
      time: moment(previousState.time).add(count, 'year').toISOString()
    }))
  };

  render() {
    return (
      <Card className="mt-2">
        <Card.Header>
          Functions & dates
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={3}>
              <Form>
                <Form.Group controlId="time">
                  <DatePicker dropdownMode="select"
                              dateFormat="dd.MM.yyyy"
                              selected={this.state.time}
                              onChange={this.handleTimeChange}
                              className="form-control"/>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={3}>
              <Button onClick={this.handleResetTime}>Reset time</Button>
            </Col>
            <Col xs={3}>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    value={this.state.yearsCount}
                    onChange={this.handleYearChange}
                    type="number"
                    placeholder="Set years ahead"
                    aria-describedby="inputGroupPrepend"
                  />
                  <InputGroup.Append>
                    <Button onClick={() => this.handleYearAddition(this.state.yearsCount)}>Add</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xs={3}>
              {moment(this.state.time).format('DD-M-YY')}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}
