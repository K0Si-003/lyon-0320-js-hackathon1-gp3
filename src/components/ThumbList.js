import React from "react";
import Thumb from "./Thumb";
import { Link } from "react-router-dom";
import "../styles/ThumbList.css";
import Loader from "./Loader";

class ThumbList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.method();
  }

  render() {
    const { items } = this.props;
    if (items !== null) {
      return (
        <div className="ThumbList">
          {items.map((item) => (
            <Link to={`/details/${item.objectID}`} key={item.objectID}>
              <Thumb src={item.primaryImageSmall} title={item.title} />
            </Link>
          ))}
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default ThumbList;
