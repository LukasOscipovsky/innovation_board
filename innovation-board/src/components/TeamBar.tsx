import React, { Component } from 'react';
import Innovation from './Innovation';

interface TeamState {
  open: boolean;
}

class TeamBar extends Component<{}, TeamState> {
  constructor(props: any) {
    super(props);
      this.state = {
        open: false
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
              <label className='FormLabel'>Rights Platform</label>
              <div className="PlusDiv">
              </div>
            </div>
            <Innovation open={this.state.open}/>
          </div>
        );
      }
    }
    
    export default TeamBar;