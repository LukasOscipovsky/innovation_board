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
  titleErrorState: boolean;
  titleErrorTextState: string;
  descriptionErrorState: boolean;
  descriptionErrorTextState: string;
}

interface InnovationModalProps {
  in: InnovationDTO;
  open: boolean;
  triggerInInnovationSave(innovation: InnovationDTO): void
  triggerInInnovationClose(): void
}

const initialState = {
  title: '',
  description: '',
  status: 0,
  priority: 0,
  titleErrorState: false,
  titleErrorTextState: '',
  descriptionErrorState: false,
  descriptionErrorTextState: ''
}

const titleErrorText = 'Title is required'
const descriptionErrorText = 'Description is required'

class InnovationModal extends Component<InnovationModalProps, InnovationModalState> {
  UNSAFE_componentWillMount() {
    this.setState({
      open: false,
      title: this.props.in.getTitle,
      description: this.props.in.getDescription,
      status: this.props.in.getStatus,
      priority: this.props.in.getPriority,
      titleErrorState: false,
      titleErrorTextState: '',
      descriptionErrorState: false,
      descriptionErrorTextState: ''
    })
  }

  UNSAFE_componentWillReceiveProps(props: InnovationModalProps) {
    if (this.state.open !== props.open) {
      this.setState({ open: props.open });
    }

    if (this.state.title !== props.in.getTitle) {
      this.setState({
        title: props.in.getTitle,
        description: props.in.getDescription,
        status: props.in.getStatus,
        priority: props.in.getPriority
      });
    }
  }

  handleClose = () => {
    this.setState(initialState);
    this.props.triggerInInnovationClose();
  };

  handleSave = () => {
    this.props.in.setTitle = this.state.title;
    this.props.in.setDescription = this.state.description;
    this.props.in.setStatus = this.state.status;
    this.props.in.setPriority = this.state.priority;

    var titleErrorState: boolean = this.state.titleErrorState || this.state.title.length === 0
    var descriptionErrorState: boolean = this.state.descriptionErrorState || this.state.description.length === 0

    if (titleErrorState) {
      this.setState({
        titleErrorState: true,
        titleErrorTextState: titleErrorText,
      })
    }

    if (descriptionErrorState) {
      this.setState({
        descriptionErrorState: true,
        descriptionErrorTextState: descriptionErrorText
      })
    }

    if (titleErrorState || descriptionErrorState) {
      return
    }

    this.props.triggerInInnovationSave(this.props.in);
    this.setState(initialState);
  }

  render() {
    return (
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
      >
        <div className="modal" >
          <label className="title" >INNOVATION</label>
          <div className="textField" >
            <TextField
              required
              label="InnovationTitle"
              onChange={event => this.setState({
                title: event.currentTarget.value,
                titleErrorState: event.currentTarget.value.length <= 0,
                titleErrorTextState: event.currentTarget.value.length > 0 ? '' : titleErrorText
              })}
              placeholder="Innovation Title"
              variant="outlined"
              style={{ fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black' }
              }
              margin="normal"
              error={this.state.titleErrorState}
              helperText={this.state.titleErrorTextState}
              value={this.state.title}
              fullWidth={true}
            />
          </div>
          <div className="textField" >
            <TextField
              required
              label="Innovation Description"
              onChange={event => this.setState({
                description: event.currentTarget.value,
                descriptionErrorState: event.currentTarget.value.length <= 0,
                descriptionErrorTextState: event.currentTarget.value.length > 0 ? '' : descriptionErrorText
              })}
              style={{ fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black' }}
              placeholder="Innovation Description"
              variant="outlined"
              multiline={true}
              error={this.state.descriptionErrorState}
              helperText={this.state.descriptionErrorTextState}
              value={this.state.description}
              fullWidth
              margin="normal"
              rows={8}
              rowsMax={10} >
            </TextField>
          </div>
          <div className="select">
            <FormControl variant="outlined"
              style={{ marginLeft: 20, marginRight: 20, width: 120, background: 'white' }}>
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
                <MenuItem value={3}>Canceled</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" style={{ marginLeft: 20, marginRight: 20, width: 120, background: 'white' }}>
              <InputLabel htmlFor="outlined-priority-simple">
                Priority
            </InputLabel>
              <Select
                value={this.state.priority}
                variant="outlined"
                onChange={event => this.setState({ priority: parseInt(event.target.value) })}
                style={{ width: 120 }}
                inputProps={{
                  name: 'priority',
                  id: 'outlined-priority-simple',
                }}
              >
                <MenuItem value={0}>Low</MenuItem>
                <MenuItem value={1}>Medium</MenuItem>
                <MenuItem value={2}>High</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="action">
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