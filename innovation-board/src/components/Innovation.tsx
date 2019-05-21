import React, { Component } from 'react';

interface InnovationState {
  open: boolean;
  title: string;
}

interface IProps {
    open: boolean,
}

class Innovation extends Component<IProps, InnovationState> { 
  constructor(props: any) {
    super(props);
    this.state = {
        open: this.props.open,
        title: ''
    }
}
    render() {
        return (
          <div className='InnovationDiv'>
          </div>
        );
      }
    }
    
    export default Innovation;