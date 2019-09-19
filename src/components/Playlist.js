import React from 'react'

const Playlist = (props) => {

return(

<div className={props.selected} onClick={props.handleClick}>

  {props.name}

</div>

)

}




export default Playlist
