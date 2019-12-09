import React from 'react';
import './UserOutput.css'


const userOuput = (props) => {

  return (

    <div className="UserOutput">
      <p>{props.username} succesfuly connected</p>
      <p></p>
    </div>
  )
};

export default userOuput;
