import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TeamDTO from '../data/teamDTO';

interface TeamModalState {
    open: boolean;
    name: string;
}

interface TeamModalProps {
    open: boolean;
    triggerInTeamSave(team: TeamDTO): void
}

const initialState = {
    name: ''
}

class TeamModal extends Component<TeamModalProps, TeamModalState> {
    UNSAFE_componentWillMount() {
        this.setState({
            open: false
        });
    }

    UNSAFE_componentWillReceiveProps(props: TeamModalProps) {
        if (this.state.open !== props.open) {
            this.setState({ open: props.open });
        }
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSave = () => {
        let team: TeamDTO = new TeamDTO();
        team.setTeamName = this.state.name;
        team.setInnovations = [];
        this.props.triggerInTeamSave(team);
        this.setState(initialState);
    }

    render() {
        return (
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div className="modal" >
                    <label className="title" >NEW TEAM</label>
                    <div className="textField" >
                        <TextField
                            required
                            label="TeamName"
                            onChange={event => this.setState({ name: event.currentTarget.value })}
                            placeholder="Team Name"
                            variant="outlined"
                            style={{ fontFamily: 'Trim,DAZN-Bold,Oscine', outlineColor: 'black' }
                            }
                            margin="normal"
                            value={this.state.name}
                            fullWidth={true}
                        />
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

export default TeamModal;