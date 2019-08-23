import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import CreateUserModal from './CreateUserModal/CreateUserModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class Users extends Component {

  state = {
    users: []
  };

  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = () => axios.get(`users/list`)
    .then(response => {
      this.setState({
        users: response.data
      })
    });

  render() {
    return (
      <div className="mt-5 mb-5">
        <Container className="mt-5">
          <Row>
            <Col>
              <CreateUserModal
                onReloadUserList={this.getUsersList}
              />
              <ListGroup className="mt-2">
                {this.state.users
                  .map(item => (
                    <Link to={`user/${item.id}`} key={item.id}>

                      <ListGroup.Item
                        key={item.id}
                        variant="light"
                        action>
                        <Image className="mr-2"
                               src={`http://via.placeholder.com/50?text=${item.name.charAt(0)}`}
                               rounded/>
                        {item.name},
                        {item.address}
                        {item.isNew ?
                          <Badge
                            variant="secondary"
                            className="ml-2">New</Badge> : null}
                        <ProgressBar
                          striped
                          animated
                          className="mt-2"
                          now={item.workProgress}
                          label={item.task}/>
                      </ListGroup.Item>
                    </Link>
                  ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
