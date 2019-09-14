import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Innovation from './Innovation';
import TeamDTO from '../data/teamDTO';

interface TeamState {
  open: boolean;
}

interface TeamProps {
  team: TeamDTO
}

class TeamBar extends Component<TeamProps, TeamState> {
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

  handleSave = () => {
    this.handleClose();
  }

  compsFromList() {
    if (this.props.team.innovations !== undefined) {
      return this.props.team.innovations
        .map((i) => {
          return (<Innovation in={i} />)
        });
    }
  }

  render() {
    let upper = this.props.team.teamName === undefined ? '' : this.props.team.teamName.toUpperCase();

    return (
      <div className='teamBar'>
        <div className='titleContainer'>
          <label className='title'>{upper}</label>
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
                style={{ fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black' }}
                margin="normal"
                fullWidth={true}
              />
            </div>
            <div className="TextFieldDiv">
              <TextField
                required
                label="Innovation Description"
                style={{ fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black' }}
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
                style={{ backgroundColor: '#242d34', marginRight: 20, color: '#f8fc00', fontFamily: 'Trim,DAZN-Bold,Oscine' }}
                onClick={this.handleSave}>
                Save
                        </Button>
              <Button
                style={{ backgroundColor: '#242d34', color: '#DC143C', fontFamily: 'Trim,DAZN-Bold,Oscine' }}
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