import React, { Component } from 'react';
import Innovation from './Innovation';
import InnovationDTO from '../data/InnovationDTO';

interface InnovationState {
    invs: Array<InnovationDTO>;
    isModalVisible: boolean;
}

class TeamBar extends Component<{}, InnovationState> {
    constructor(props: any) {
        super(props);
        this.state = {
            invs: [],
            isModalVisible: false
        }
    }

    handleClick() {
        this.setState({
            invs: this.add(),
            isModalVisible: !this.state.isModalVisible
        });
    }

    add(): Array<InnovationDTO> {
        var innovation: InnovationDTO = new InnovationDTO('test');

        this.state.invs.push(innovation);

        return this.state.invs;
    } 

    compsFromList() {
        console.log(this.state.invs);
    
        return this.state.invs
        .map((inv) => {
          return (<Innovation in={inv}/>)
        });
    }
    
    render() {
        return (
          <div className='TeamBar'>
            <div className='FormDiv'>
              <label className='FormLabel'>Rights Platform</label>
            </div>
            <div className='InnovationDiv'>
            </div>
          </div>
        );
      }
    }
    
    export default TeamBar;