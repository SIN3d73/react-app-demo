import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import * as PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/es/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Feature extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  render() {
    const {children, className, headerName, code} = this.props;
    return (
      <Card className={className}>
        <Card.Header>
          <Button variant="link" onClick={() => {
            this.setState({open: !this.state.open})
          }}>
            {headerName || ''}
          </Button>
        </Card.Header>
        <Collapse in={this.state.open}>
          <Card.Body>
            <Row>
              <Col>
          <pre>
            {code}
          </pre>
              </Col>
              <Col>
                {children}
              </Col>
            </Row>
          </Card.Body>
        </Collapse>
      </Card>
    )
  }
}

Feature.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  headerName: PropTypes.string,
  code: PropTypes.string,

};

export default Feature;