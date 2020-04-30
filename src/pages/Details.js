import React, { Fragment, Component } from "react";
import "../styles/Details.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Header from "../components/Header";
import Loader from '../components/Loader';
import Footer from '../components/Footer'

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
              <h3 className='title title-details'>{item.title}</h3>
              <p>{item.repository}</p>

              <p className={(item.objectDate.length===0)?"showDateNone": ""}>Date : {item.objectDate.toString().charAt(0).toUpperCase()+item.objectDate.substring(1).toLowerCase()}</p>
              <p>{item.dimensions}</p>
              <p>{`${item.geographyType} ${item.country}`}</p>
              <a
                href={item.objectURL}
                target="_blank"
                rel="noreferrer noopener"
                className="link full-details"
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
          <Footer />  
        </Fragment>
      );
    }
  }
}

export default Details;
