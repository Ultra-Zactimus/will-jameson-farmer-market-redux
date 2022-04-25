import React from "react";
import PropTypes from 'prop-types';

function ProduceList(props) {
  return (
  <React.Fragment>
    <ul>
    {Object.values(props.list).map((food) =>
    <li>{food}</li>
    )}  
    </ul>
  </React.Fragment>
  )
}

ProduceList.propTypes = {
  list: PropTypes.array
}

export default ProduceList;