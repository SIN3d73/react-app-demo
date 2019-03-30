import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/es/ListGroupItem';
import Button from 'react-bootstrap/es/Button';
import Image from 'react-bootstrap/es/Image';


export default class ListsExample extends Component {

  state = {
    filter: '',
    list: ['Kebab', 'Kefir', 'Baobab'],
    objectList: [
      {
        name: 'Pietia',
        imagePath: 'http://via.placeholder.com/50?text=P',
        expYears: 3,
      },
      {
        name: 'Karol',
        imagePath: 'http://via.placeholder.com/50?text=K',
        expYears: 8,
      },
      {
        name: 'Marcinek',
        imagePath: null,
        expYears: 0,
      }
    ]
  };

  seniorYear = 7;
  defaultImagePath = 'http://via.placeholder.com/50/eee?text=?';

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
  };

  render() {
    return (
      <Card className="mt-2">
        <Card.Header>
          Dealing with lists
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={3}>
              <ListGroup>
                {
                  this.state.list.map(item => (
                    <ListGroupItem key={item}>
                      {item}
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </Col>
            <Col xs={3}>
              <Form>
                <Form.Group controlId="filter-input">
                  <Form.Control onChange={this.handleFilterChange} value={this.state.filter} type="text"
                                placeholder="Filter list below"/>
                </Form.Group>
              </Form>
              <ListGroup>
                {
                  this.state.list.filter(item => item.toLowerCase().includes(this.state.filter.toLowerCase())).map(item => (
                    <ListGroupItem key={item}>
                      {item}
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </Col>
            <Col xs={3}>
              <ListGroup>
                {
                  this.state.list.map((item, index) => (
                    <ListGroupItem key={item}>
                      <Button onClick={() => alert(`${index + 1}. ${item}`)}
                              className="w-100">{index + 1}. {item}</Button>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </Col>
            <Col xs={3}>
              <ListGroup>
                {
                  this.state.objectList.map((item) => (
                    <ListGroupItem key={item.name}>
                      <Image roundedCircle
                             className="mr-2"
                             src={item.imagePath || this.defaultImagePath}
                             alt=""
                             width={50}
                             height={50}
                      />
                      <span className="mr-2">{item.name}</span>
                      <wbr/>
                      {(item.expYears > this.seniorYear) && (<small className="text-success">(Senior)</small>)}
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}
