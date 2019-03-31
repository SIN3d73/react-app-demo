import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import * as PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/es/Col';
import Row from 'react-bootstrap/Row';


class TopCard extends Component {
  render() {
    return (
      <Card className={"mt-5"}>
        <Card.Body>
         <Row>
           <Col>
             <Form>
               <Form.Group controlId="string-input">
                 <Form.Control onChange={this.props.onChange} value={this.props.textValue} type="text"
                               placeholder="Text value (a)" name="textValue"/>
               </Form.Group>
             </Form>
           </Col>
           <Col>
             <Form>
               <Form.Group controlId="number-input">
                 <Form.Control onChange={this.props.onChange} value={this.props.numberValue} type="number"
                               placeholder="Number value (b)" name="numberValue"/>
               </Form.Group>
             </Form>
           </Col>
         </Row>
        </Card.Body>
      </Card>
    )
  }
}

TopCard.propTypes = {
  textValue: PropTypes.string,
  numberValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
};

export default TopCard;