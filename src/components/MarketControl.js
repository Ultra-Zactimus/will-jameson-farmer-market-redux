import React from "react";
import Schedule from "./Schedule"
import Produce from "./Produce"
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    {console.log("MarketControl:", this.props)}
    return (
      <React.Fragment> 
        <div className="row">
          <div className="col-md-4">
            <Schedule
              marketSchedule={this.props.marketSchedule} />
          </div>
          <div className="col-md-8">
            <Produce
              availableProduce={this.props.availableProduce} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MarketControl.propTypes = {
  marketSchedule: PropTypes.array,
  availableProduce: PropTypes.array
};

const mapStateToProps = state => {
  return {
    marketSchedule: state.marketSchedule,
    availableProduce: state.availableProduce
  }
}

MarketControl = connect(mapStateToProps)(MarketControl);

export default MarketControl;