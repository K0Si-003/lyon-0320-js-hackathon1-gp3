import React, { Fragment } from "react";
import '../styles/Details.css';
import { Link } from "react-router-dom";

const Details = (props) => {
  return (
    <Fragment>
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
          <img src="https://images.metmuseum.org/CRDImages/es/original/59669.jpg" alt="props.item.title"></img>
        </section>
      </div>
      <Link to='/' className='button'>Go back to results</Link>
    </Fragment>
  )
};

export default Details;