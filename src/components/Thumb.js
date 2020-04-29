import React from 'react';

const Thumb = ({id, title, src}) =>{

  return(
    <div className="ThumbNail"  key={id}>
      <h2> <span className='ThumbTitle'>{title}</span> </h2>
      <div className="ThumbOverlay"/>
      <img className='ThumbImg' src={src} alt={title}/>
    </div>
  )
}

export default Thumb ;