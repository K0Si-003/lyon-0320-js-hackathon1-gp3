import React from 'react';
import '../styles/Thumb.css';

const Thumb = ({id, title, src}) =>{

  return(



    <div className="ThumbNail"  key={id}>
      <figure className="img-hov">
      <img className='ThumbImg' src={src} alt={title}/>
        <figcaption>
          <h3 className='ThumbTitle'>{title}</h3>
        </figcaption>
    </figure>
    </div>
  )
}

export default Thumb ;
