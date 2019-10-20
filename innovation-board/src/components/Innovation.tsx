import React, { Component } from 'react';
import InnovationDTO from '../data/InnovationDTO';
import InnovationModal from '../modals/InnovationModal';
import { getPriorityColor, getStatusColor } from '../colors/colors'
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Clear from '@material-ui/icons/Clear';
import Tooltip from '@material-ui/core/Tooltip';

interface IProps {
  in: InnovationDTO;
  presentationEnabled: boolean;
  triggerInSave(innovation: InnovationDTO): void
  triggerInDelete(innovation: InnovationDTO): void
}

interface IState {
  in: InnovationDTO;
  open: boolean;
  presentationEnabled: boolean;
}

class Innovation extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      in: this.props.in,
      open: false,
      presentationEnabled: false
    }
  }

  UNSAFE_componentWillReceiveProps(props: IProps) {
    if (this.state.in !== props.in) {
      this.setState({ in: props.in });
    }
    if (this.state.presentationEnabled !== props.presentationEnabled) {
      this.setState({ presentationEnabled: props.presentationEnabled });
    }
  }

  render() {
    let upper: string = this.state.in.getTitle.toUpperCase();
    let lineColor: string = getStatusColor(this.props.in.getStatus);

    return (
      <div className='innovation'>
        <div className='clear'>
          <Clear style={{ color: '#FF4136', width: 15, cursor: 'pointer', visibility: this.props.presentationEnabled ? 'hidden' : 'visible' }} onClick={e => this.props.triggerInDelete(this.state.in)} />
        </div>
        <Tooltip title={this.state.in.getTitle}>
          <div className='title-container'>
            <label className='title' onClick={e => this.setState({ open: !this.props.presentationEnabled })}>{upper}</label>
            <InnovationModal
              triggerInInnovationClose={() => this.setState({ open: false })}
              triggerInInnovationSave={innovation => { this.setState({ open: false }); this.props.triggerInSave(innovation) }}
              open={this.state.open}
              in={this.state.in} />
          </div>
        </Tooltip>
        <div className='priority'>
          <ArrowUpward style={{ color: getPriorityColor(this.state.in.getPriority), width: 15 }} />
        </div>
        <div className='line' style={{ background: lineColor, opacity: 1 }} />
      </div>
    );
  }
}

export default Innovation;