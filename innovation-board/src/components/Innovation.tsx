import React, { Component } from 'react';
import InnovationDTO from '../data/InnovationDTO';

interface IProps {
  in: InnovationDTO;
}

interface IState {
  in: InnovationDTO;
}

const colors: { [id: number]: string; } = {};
colors[0] = "#f8fc00";
colors[1] = "#0000FF";
colors[2] = "#006400";

class Innovation extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);

    this.state = {
      in: this.props.in
    }
  }

  render() {
    let upper: string = this.state.in.title === undefined ? '' : this.state.in.title.toUpperCase();
    let lineColor: string = this.props.in.status === undefined ? '#A9A9A9' : colors[this.props.in.status];

    return (
      <div className='innovation'>
        <div className='title-container'>
          <label className='title'>{upper}</label>
        </div>
        <div className='line' style={{ background: lineColor, opacity: 1 }} />
      </div>
    );
  }
}

export default Innovation;