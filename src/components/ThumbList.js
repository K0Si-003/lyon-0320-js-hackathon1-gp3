import React from "react";

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
      return items.map((item) => <p>{item.title}</p>);
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default ThumbList;
