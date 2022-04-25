import React from "react";

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: "Monday"
    };
  }

  scheduleUpdate = (event) => {
    this.setState( { dayOfWeek: event.currentTarget.value } );
  }

  render() {
    console.log("schedule", this.props)
    const currentWeekday = this.props.marketSchedule.find(x => x.day === this.state.dayOfWeek);

    return (
      <React.Fragment>
        <h1 className="display-6">Market Schedule</h1>
        <hr />
        <form>
          <label htmlFor="weekdays"><span className="text-lead">Choose a day of the week:</span></label>
            <select onChange={this.scheduleUpdate} className="form-control" id="weekdays" name="weekdays">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
        </form>
        <hr />
        <p>Day of the Week: {currentWeekday.day}</p>
        <p>Market Location: {currentWeekday.location}</p>
        <p>Vendor Booth: {currentWeekday.booth}</p>
        <p>Hours: {currentWeekday.hours}</p>
      </React.Fragment>
    );
  }
}

export default Schedule;