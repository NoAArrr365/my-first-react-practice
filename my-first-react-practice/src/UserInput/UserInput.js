import React from 'react';


const userInput = (props) => {
  const style = {

    border: '1px solid grey'


  }
  return (

      <input type="text"
      style={style}
      onChange={props.changed}
      value={props.currentUser} />

  )
};

export default userInput;
