import React from 'react';
import { Roller } from 'react-awesome-spinners';
import '../styles/Loader.css';

const Loader = (props) => {
  return (
    <div className='loader-container'>
      <Roller color='#121212' />
    </div>
  )
};

export default Loader;
