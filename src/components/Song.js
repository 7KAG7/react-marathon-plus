import React from 'react'

const Song = (props) => {


  return(
    <div className={props.selected} onClick={props.handleClick}>
      {props.name} - {props.artist}
    </div>
  )
}

export default Song
