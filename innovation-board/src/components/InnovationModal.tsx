import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InnovationDTO from '../data/innovationDTO';

interface ModalState {
  open: boolean;
  title: string;
  description: string;
  status: number;
}

interface ModalProps {
  in: InnovationDTO;
  open: boolean;
  triggerInSave(innovation: InnovationDTO): void
}

class InnovationModal extends Component<ModalProps, ModalState> {
  componentWillMount() {
    this.setState({
      open: false,
      title: this.props.in.getTitle,
      description: this.props.in.getDescription,
      status: this.props.in.getStatus
    })
  }

  componentWillReceiveProps(props: ModalProps) {
    this.setState({ open: props.open })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    this.props.in.setTitle = this.state.title;
    this.props.in.setDescription = this.state.description;
    this.props.triggerInSave(this.props.in)
    this.handleClose();
    console.log(this.props.open);
  }

  render() {
    return (
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
      >
        <div className="InnovationModal" >
          <label className="ModalTitle" >INNOVATION</label>
          <div className="TextFieldDiv" >
            <TextField
              required
              label="InnovationTitle"
              onChange={event => this.setState({ title: event.currentTarget.value })}
              placeholder="Innovation Title"
              variant="outlined"
              style={{ fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black' }
              }
              margin="normal"
              value={this.state.title}
              fullWidth={true}
            />
          </div>
          <div className="TextFieldDiv" >
            <TextField
              required
              label="Innovation Description"
              onChange={event => this.setState({ description: event.currentTarget.value })}
              style={{ fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black' }}
              placeholder="Innovation Description"
              variant="outlined"
              multiline={true}
              value={this.state.description}
              fullWidth
              margin="normal"
              rows={8}
              rowsMax={10} >
            </TextField>
          </div>
          <div className="SelectBoxes">
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-status-simple">
                Status
            </InputLabel>
              <Select
                value={this.state.status}
                variant="outlined"
                onChange={event => this.setState({ status: parseInt(event.target.value) })}
                style={{ width: 120 }}
                inputProps={{
                  name: 'status',
                  id: 'outlined-status-simple',
                }}
              >
                <MenuItem value={0}>Planned</MenuItem>
                <MenuItem value={1}>In Progress</MenuItem>
                <MenuItem value={2}>Done</MenuItem>
              </Select>
            </FormControl>
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
    );
  }
}

export default InnovationModal;