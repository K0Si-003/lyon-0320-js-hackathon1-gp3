import React from "react";
import '../styles/Details.css';

const Details = (props) => {
  return (
      <div className='containerDetail'>
        <section className='info-details'>
          <h3>props.item.title</h3>
          <p>props.item.repository</p>
          <p>props.item.objectDate</p>
          <p>props.item.dimensions</p>
          <p>props.item.geographyType + props.item.country</p>
          <p>props.item.objectURL</p>
        </section>
        <section className='img-details'>
          <img src="props.item.primaryImage" alt="props.item.title"></img>
        </section>
      </div>
  )
};

export default Details;