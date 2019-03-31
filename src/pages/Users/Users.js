import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';

export default class Users extends Component {

 state = {
  users: [
   {
    id: 1,
    name: 'Ludmiła Stanik',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Kielce',
    url: '#user1',
    isNew: true,
    skillQuality: 20,
    directionSkill: 'GIT'
   },
   {
    id: 2,
    name: 'Stanisław Feler',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Kielce',
    url: '#user2',
    isNew: false,
    skillQuality: 40,
    directionSkill: 'SCSS',
    variantSkill: 'warning'
   },
   {
    id: 3,
    name: 'Szymon Nowak',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Nysa',
    url: '#user3',
    isNew: true,
    skillQuality: 15,
    directionSkill: 'ANGULAR JS',
    variantSkill: 'danger'
   },
   {
    id: 4,
    name: 'Jarosław Pałka',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Kraków',
    url: '#user4',
    isNew: false,
    skillQuality: 30,
    directionSkill: 'ANGULAR'
   },
   {
    id: 5,
    name: 'Robert Niewierny',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-435 Warszawa',
    url: '#user5',
    isNew: true,
    skillQuality: 8,
    directionSkill: 'JIRA'
   },
   {
    id: 6,
    name: 'Agnieszka Staniszewska',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Kielce',
    url: '#user6',
    isNew: true,
    skillQuality: 5,
    directionSkill: 'VUE JS',
    variantSkill: 'danger'
   },
   {
    id: 7,
    name: 'Mirosław Zielent',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Kielce',
    url: '#user7',
    isNew: false,
    skillQuality: 90,
    directionSkill: 'JAVASCRIPT',
    variantSkill: 'success'
   },
   {
    id: 8,
    name: 'Szymon Drakula',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Nysa',
    url: '#user8',
    isNew: true,
    skillQuality: 69,
    directionSkill: 'CSS'
   },
   {
    id: 9,
    name: 'Jadwiga Łyżeczka',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-640 Kraków',
    url: '#user9',
    isNew: false,
    skillQuality: 50,
    directionSkill: 'REACT JS',
    variantSkill: 'warning'
   },
   {
    id: 10,
    name: 'Robert Poprawny',
    age: 20,
    address: 'Jana Pawła 20A',
    postCode: '25-435 Warszawa',
    url: '#user10',
    isNew: true,
    skillQuality: 100,
    directionSkill: 'HTML 5',
    variantSkill: 'success'
   }
  ]
 };

 checkUser(user) {
  alert(`${user.name} is the best person to work with ${user.directionSkill}, ! Great :)! Nicely Done :)`)
 }

 render() {
  return (
    <div className="mt-5 mb-5">

     <h1>Select User</h1>
     <ListGroup>
      {this.state.users.map(item =>
        <ListGroup.Item
         key={item.id}
         onClick={() => this.checkUser(item)}
         variant="light"
         action
         href={item.url}>
         <Image className="mr-2" src="https://image.freepik.com/free-icon/avatar-of-a-person-with-dark-short-hair_318-68905.jpg" rounded />
         {item.name},
         {item.postCode}
         {item.isNew ?
           <Badge variant="secondary" className="ml-2"> New</Badge>: null}
         <ProgressBar striped animated  className="mt-2" now={item.skillQuality} label={item.directionSkill} variant={item.variantSkill} />
        </ListGroup.Item>)}
     </ListGroup>
    </div>
  );
 }
}
