import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InnovationDTO from '../data/InnovationDTO';

interface InnovationModalState {
  open: boolean;
  title: string;
  description: string;
  status: number;
  priority: number;
}

interface InnovationModalProps {
  in: InnovationDTO;
  open: boolean;
  triggerInInnovationSave(innovation: InnovationDTO): void
  triggerInInnovationClose(): void
}

class InnovationModal extends Component<InnovationModalProps, InnovationModalState> {
  componentWillMount() {
    this.setState({
      title: this.props.in.getTitle,
      description: this.props.in.getDescription,
      status: this.props.in.getStatus,
      priority: this.props.in.getPriority
    })
  }

  componentWillReceiveProps(props: InnovationModalProps) {
    if (this.state.open !== props.open) {
      this.setState({ open: props.open });
    }
    console.log(this.props.in);
  }

  handleClose = () => {
    this.props.triggerInInnovationClose();
  };

  handleSave = () => {
    this.props.in.setTitle = this.state.title;
    this.props.in.setDescription = this.state.description;
    this.props.in.setStatus = this.state.status;
    this.props.in.setPriority = this.state.priority;
    this.props.triggerInInnovationSave(this.props.in);
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
                style={{ width: 120, marginRight: 30 }}
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-status-simple">
                Priority
            </InputLabel>
              <Select
                value={this.state.priority}
                variant="outlined"
                onChange={event => this.setState({ priority: parseInt(event.target.value) })}
                style={{ width: 120, marginLeft: 30 }}
                inputProps={{
                  name: 'priority',
                  id: 'outlined-status-simple',
                }}
              >
                <MenuItem value={0}>Low</MenuItem>
                <MenuItem value={1}>Medium</MenuItem>
                <MenuItem value={2}>High</MenuItem>
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
              style={{ backgroundColor: '#242d34', color: '#FF4136', fontFamily: 'Trim,DAZN-Bold,Oscine' }}
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