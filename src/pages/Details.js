import React, { Fragment, Component } from "react";
import "../styles/Details.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Header from "../components/Header";
import Loader from '../components/Loader';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }
  getItem = async () => {
    const id = this.props.match.params.id;
    const item = await Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    )
      .then((response) => response.data)
      .then((data) => data);
    console.log(item);
    this.setState({ item });
  };
  componentDidMount() {
    this.getItem();
  }

  render() {
    const item = this.state.item;
    if (this.state.item === null) {
      return (
        <header>
          <Header />;
          <Loader />;
        </header>
      )
    } else {
      return (
        <Fragment>
          <header>
            <Header />
          </header>
          <div className="containerDetail">
            <section className="info-details">
              <h3>{item.title}</h3>
              <p>{item.repository}</p>
              <p>{item.objectDate}</p>
              <p>{item.dimensions}</p>
              <p>{`${item.geographyType} ${item.country}`}</p>
              <a
                href={item.objectURL}
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                Full Details
              </a>
            </section>
            <section className="img-details">
              <img src={item.primaryImageSmall} alt={item.title}></img>
            </section>
          </div>
          <Link to="/" className="button">
            Go back to results
          </Link>
        </Fragment>
      );
    }
  }
}

export default Details;
