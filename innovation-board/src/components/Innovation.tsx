import React, { Component } from 'react';
import InnovationDTO from '../data/InnovationDTO';

interface IProps {
  in: InnovationDTO;
}

interface IState {
  in: InnovationDTO;
}

class Innovation extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      in: this.props.in
    }
  }

  render() {
    let upper: string = this.state.in.title === undefined ? '' : this.state.in.title.toUpperCase();

    return (
      <div className='innovation'>
        <div className='title-container'>
          <label className='title'>{upper}</label>
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default Innovation;