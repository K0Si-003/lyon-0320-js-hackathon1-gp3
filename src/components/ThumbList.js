import React from 'react';
import Thumb from './Thumb';
import {Link} from 'react-router-dom';

class ThumbList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    this.props.method()
  }

  render() {
    const {items} = this.props;
    if(items !== null) {
      console.log(items)
      return items.map(item => <Link to={`/${item.objectID}`} > <Thumb key={item.objectID} src={item.primaryImageSmall} title={items.title}/> </Link> )
    } else {
      return <p>Loading ...</p>
    }
  }
}

export default ThumbList;