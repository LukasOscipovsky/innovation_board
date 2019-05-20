import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

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

    handleOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
        return (
          <div className='InnovationDiv'>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
                <div className="InnovationModal">
                    <label className="ModalTitle">INNOVATION</label>
                        <TextField
                        required
                        label="InnovationTitle" 
                        onChange={event => this.setState({title: event.currentTarget.value})} 
                        placeholder="Innovation Title"
                        variant="outlined"
                        style={{fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black'}}
                        margin='normal'
                        />
                        <TextField
                        required
                        label="InnovationDescription" 
                        style={{fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black'}}
                        placeholder="Innovation Description"
                        variant="outlined"
                        margin='normal'
                        multiline={true}
                        rows={5}
                        rowsMax={10}>
                        </TextField>
                    <div className="ModalActions">
                        <Button
                        style={{backgroundColor: '#242d34', marginRight: 20, color: '#f8fc00', fontFamily: 'Trim,Now-Bold,Oscine'}}
                        onClick={this.handleClose}>
                        Save
                        </Button>
                        <Button
                        style={{backgroundColor: '#242d34', color: '#DC143C', fontFamily: 'Trim,Now-Bold,Oscine'}} 
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
    
    export default Innovation;