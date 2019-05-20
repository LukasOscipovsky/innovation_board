import React, { Component } from 'react';
import Innovation from './Innovation';

interface TeamState {
  open: boolean;
  name: string;
}

interface TeamProps {
  name: string;
}

class TeamBar extends Component<TeamProps, TeamState> {
  constructor(props: any) {
    super(props);
      this.state = {
        open: false,
        name: this.props.name
      }
    }
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };  
  
  render() {
        return (
          <div className='TeamBar'>
            <div className='FormDiv'>
              <label className='FormLabel'>{this.state.name}</label>
              <div className="PlusDiv">
              </div>
            </div>
            <Innovation open={this.state.open}/>
          </div>
        );
      }
    }
    
    export default TeamBar;