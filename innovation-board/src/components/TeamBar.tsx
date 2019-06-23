import React, { Component } from 'react';
import Add from '../assets/add-plus-button.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import InnovationDTO from '../data/InnovationDTO';
import Innovation from './Innovation';

interface TeamState {
  open: boolean;
  name: string;
  ins: Array<InnovationDTO>
}

interface TeamProps {
  name: string;
}

class TeamBar extends Component<TeamProps, TeamState> {
  constructor(props: any) {
    super(props);
      this.state = {
        open: false,
        name: this.props.name,
        ins: []
      }
    }
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };  

  handleSave = () => {
    var i = new InnovationDTO("test", "testDescription");
    var i2 = new InnovationDTO("test7567865", "testDescription");
    var i3 = new InnovationDTO("test87578578", "testDescription");
    var i4 = new InnovationDTO("test875785785785", "testDescription");
    var i5 = new InnovationDTO("test578", "testDescription");
    var i6 = new InnovationDTO("test785785785785785", "testDescription");
    var i7 = new InnovationDTO("test42452452452452452452", "testDescription");

    this.state.ins.push(i);
    this.state.ins.push(i2);
    this.state.ins.push(i3);
    this.state.ins.push(i4);
    this.state.ins.push(i5);
    this.state.ins.push(i6);
    this.state.ins.push(i7);

    this.handleClose();
  }

  compsFromList() {
    return this.state.ins
    .map((i) => {
      return (<Innovation in={i}/>)
    });
  }
  
  render() {
        return (
          <div className='TeamBar'>
            <div className='FormDiv'>
              <label className='FormLabel'>{this.state.name}</label>
              <div className="PlusDiv" onClick={this.handleOpen}>
                <img src={Add} className="Add-icon" alt="add"/>
              </div>
            </div>
            <div className='InnovationContainer'>
              {this.compsFromList()}
            </div>
            <Modal
            open={this.state.open}
            onClose={this.handleClose}
            >
                <div className="InnovationModal">
                    <label className="ModalTitle">INNOVATION</label>
                      <div className="TextFieldDiv">
                        <TextField
                        required
                        label="InnovationTitle" 
                        /* onChange={event => this.setState({title: event.currentTarget.value})} */
                        placeholder="Innovation Title"
                        variant="outlined"
                        style={{fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black'}}
                        margin="normal"
                        fullWidth={true}
                        />
                        </div>
                        <div className="TextFieldDiv">
                        <TextField
                        required
                        label="Innovation Description" 
                        style={{fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black'}}
                        placeholder="Innovation Description"
                        variant="outlined"
                        multiline={true}
                        fullWidth
                        margin="normal"
                        rows={8}
                        rowsMax={10}>
                        </TextField>
                        </div>
                        <div className="ModalActions">
                        <Button
                        style={{backgroundColor: '#242d34', marginRight: 20, color: '#f8fc00', fontFamily: 'Trim,DAZN-Bold,Oscine'}}
                        onClick={this.handleSave}>
                        Save
                        </Button>
                        <Button
                        style={{backgroundColor: '#242d34', color: '#DC143C', fontFamily: 'Trim,DAZN-Bold,Oscine'}} 
                        onClick={this.handleClose}>
                        Close
                        </Button>
                    </div>
                </div>
            </Modal>
          </div>
        );
      }
    }
    
    export default TeamBar;