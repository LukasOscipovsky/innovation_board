import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

interface DeleteModalState {
    open: boolean;
}

interface DeleteModalProps {
    open: boolean;
    triggerDelete(): void
    triggerClose(): void;
}

class DeleteTeamModal extends Component<DeleteModalProps, DeleteModalState> {
    UNSAFE_componentWillMount() {
        this.setState({
            open: false,
        });
    }

    UNSAFE_componentWillReceiveProps(props: DeleteModalProps) {
        if (this.state.open !== props.open) {
            this.setState({ open: props.open });
        }
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.triggerClose();
    };

    handleDelete = () => {
        this.props.triggerDelete();
    }

    render() {
        return (
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div className="delete" >
                    <label className="title" >Are you sure you want to delete the team?</label>
                    <div className="actions">
                        <Button
                            style={{ backgroundColor: '#242d34', marginRight: 20, color: '#f8fc00', fontFamily: 'Trim,DAZN-Bold,Oscine' }}
                            onClick={this.handleDelete}>
                            Yes
                        </Button>
                        <Button
                            style={{ backgroundColor: '#242d34', color: '#FF4136', fontFamily: 'Trim,DAZN-Bold,Oscine' }}
                            onClick={this.handleClose}>
                            No
                        </Button>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default DeleteTeamModal;