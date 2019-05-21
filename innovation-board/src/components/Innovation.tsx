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
        return (
          <div className='InnovationDiv'>
            <label className='InnovationTitle'>{this.state.in.title}</label>
          </div>
        );
      }
    }
    
    export default Innovation;