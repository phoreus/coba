import React from 'react';
import './App.css';

export interface MyState {
  name: string;
  class: string;
  isAvailable: string;
  numButton: number;
}

export class Component1 extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: 'Maio',
      class: 'XI MIPA 2',
      isAvailable: 'false',
      numButton: 1,
    };
  }

  handleClick = () => {
    console.log('button clicked...');
    this.setState({
      numButton: this.state.numButton + 1,
    });
  };

  render() {
    if (this.state.numButton % 3) {
      return (
        <div>
          <h1>Nama : {this.state.name}</h1>
          <p>Kelas : {this.state.class}</p>
          <p>Pagi : {this.state.isAvailable}</p>

          <h1>{this.state.numButton}</h1>

          <button type="button" onClick={this.handleClick}>
            click me
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Nama : {this.state.name}</h1>
          <p>Kelas : {this.state.class}</p>
          <p>Pagi : {this.state.isAvailable}</p>

          <h1>{this.state.numButton}</h1>

          <button type="button" onClick={this.handleClick}>
            click me
          </button>
          <img src="https://i.kym-cdn.com/entries/icons/original/000/020/514/827465766a57ffc6db9786e0632d60f4.jpg"></img>
        </div>
      );
    }
  }
}
export default Component1;
