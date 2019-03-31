import React, { Component } from 'react';
import Feature from './Feature/Feature';
import TopCard from './TopCard/TopCard';
import Button from 'react-bootstrap/Button';


export default class JsUtils extends Component {
  state = {
    textValue: '',
    numberValue: '',
    list: []
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  sub = (a, b) => a - b;

  // noinspection JSMethodCanBeStatic
  add(a, b) {
    return (+a) + (+b)
  }

  doMath = (fn) => fn(8, 4);

  doSthLater = (fn) => {
    setTimeout(fn, 5000)
  };

  addToList = (value) => {
    console.log(value);
    this.setState((prevState) => ({list: [...prevState.list, value], textValue: ''})
    )
  };

  render() {
    const {textValue, numberValue} = this.state;
    return (
      <React.Fragment>
        <TopCard
          onChange={this.handleChange}
          textValue={textValue}
          numberValue={numberValue}
        />

        <Feature
          headerName="Value as boolean"
          code={`!!textValue`}
        >
          <div>
            {(!!textValue).toString()}
          </div>
        </Feature>

        <Feature
          headerName="Default value"
          code={`textValue || 'no value'`}
        >
          <div>
            {textValue || 'no value'}
          </div>
        </Feature>

        <Feature
          headerName="Conditional operator"
          code={`numberValue > 0 && textValue`}
        >
          <div>
            {numberValue > 0 && textValue}
          </div>
        </Feature>

        <Feature
          headerName="Ternary operator"
          code={`numberValue > 0 ? textValue.toUpperCase() : textValue.toLowerCase()`}
        >
          <div>
            {numberValue > 0 ? textValue.toUpperCase() : textValue.toLowerCase()}
          </div>
        </Feature>

        <Feature
          headerName="Arrow function"
          code={`sub = (a, b) => a - b\n\nadd(a, b){\n\treturn a + b\n}`}
        >
          <div>
            <div className="mb-3">
              <Button onClick={() => alert(this.sub(textValue, numberValue))}>sub</Button>
            </div>
            <div>
              <Button onClick={() => alert(this.add(textValue, numberValue))}>add</Button>
            </div>
          </div>
        </Feature>

        <Feature
          headerName="Function as parameter"
          code={`doMath = (fn) => fn(8, 4)\n\ndoMath(textValue === 'add' ? this.add : this.sub)`}
        >
          <div>
            <Button onClick={() => alert(this.doMath(textValue === 'add' ? this.add : this.sub))}>doMath</Button>
          </div>
        </Feature>

        <Feature
          headerName="Function as callback"
          code={`doSthLater = (fn) => {\n\tsetTimeout(fn, 5000)\n}\ndoSthLater(() => alert('after 5 sec'))`}
        >
          <div>
            <Button onClick={() => this.doSthLater(() => alert('after 5 sec'))}>doSthLater</Button>
          </div>
        </Feature>

        <Feature
          headerName="Mapping list"
          code={`list.map(item => \`item: \${item}\`).join(', ')`}
        >
          <div>
            <Button onClick={() => this.addToList(textValue)}>addToList</Button>
            <div className={'mt-2'}>
              {this.state.list.map(item => `item: ${item}`).join(', ')}
            </div>
          </div>
        </Feature>

        <Feature
          headerName="Filtering list"
          code={`list.map(item => \`item: \${item}\`).join(', ')`}
        >
          <div>
            <Button onClick={() => this.addToList(textValue)}>addToList</Button>
            <div className={'mt-2'}>
              {this.state.list.filter(item => item.toUpperCase() === item).join(', ')}
            </div>
          </div>
        </Feature>

      </React.Fragment>
    )
  }
}
