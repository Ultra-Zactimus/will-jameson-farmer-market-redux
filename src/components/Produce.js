import React from "react";
import ProduceList from "./ProduceList"

class Produce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "January"
    };
  }

  produceUpdate = (event) => {
    this.setState( { month: event.currentTarget.value} );
  }

  render() {
    // console.log("props: ", this.props);
    const currentMonth = this.props.availableProduce.find(e => e.month === this.state.month);

    return (
      <React.Fragment>
        <h1 className="display-6">Seasonal Produce</h1>
        <hr />
        <form>
          <label htmlFor=""><span className="text-lead">Choose month for produce availability: </span></label>
          <select onChange={this.produceUpdate} className="form-control" id="months" name="months">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </form>
        <hr />
        <p>Month: {currentMonth.month}</p>
        <ProduceList
          list={currentMonth.selection}
        />
      </React.Fragment>
    )
  }
}

export default Produce;