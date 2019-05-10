import React, { Component } from 'react';
import InnovationDTO from '../data/InnovationDTO';

interface IProps {
    in: InnovationDTO,
  }

class Innovation extends Component<IProps, {}> { 
    render() {
        return (
          <div className='InnovationDiv'>
            <label className='Title'>{this.props.in.name}</label>
          </div>
        );
      }
    }
    
    export default Innovation;