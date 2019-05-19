import React, { Component } from 'react';
import Innovation from './Innovation'

class TeamBar extends Component<{}, {}> {
    render() {
        return (
          <div className='TeamBar'>
            <div className='FormDiv'>
              <label className='FormLabel'>Rights Platform</label>
            </div>
            <Innovation/>
          </div>
        );
      }
    }
    
    export default TeamBar;