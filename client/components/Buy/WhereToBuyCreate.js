import React from "react";
import { connect } from "react-redux";
import { createStoreLocation } from "../../store";
import { getAllStores } from "../../store";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import { Pointer } from "./Pointer";
import ZipCodeSearch from "./ZipCodes";
import axios from "axios";

class _WhereToBuyCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address1: "",
      city: "",
      state: "",
      zip: "",
      loading: true,
      show: false,
      storeName: "",
      flavors: "",
      goog: process.env.GOOG_KEY,
      reloaded: false,
      coords: {},
      filteredStores: []
    };
  }
  mouseMaker = (props, marker, e) => {
    this.setState({ show: true, storeName: props.name });
  };

  async componentDidMount() {
    await this.props.getAllStores();
    let obj = { lat: 34.0522, lng: -118.2437 };
    await this.setState({ coords: obj, loading: false });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.createStoreLocation(this.state);
    this.setState({
      name: "",
      address1: "",
      city: "",
      state: "",
      zip: "",
      flavors: ""
    });
  };

  zipSearch = async (zipcode, name) => {
    let filteredStores = [];
    const { data } = await axios.post("/api/stores/zip", { zipcode, name });
    this.setState({ coords: data, reloaded: true });
    if (this.state.reloaded && this.props.stores.length > 0) {
      if (name !== "Any Flavor") {
        filteredStores = this.props.stores.filter(
          s => s.flavors.split(",").indexOf(name) > -1
        );
        this.setState({ filteredStores });
      }
    }
  };

  render() {
    let { user } = this.props;
    let stores;
    if (this.state.filteredStores.length > 0) {
      stores = [...this.state.filteredStores];
    } else {
      stores = [...this.props.stores];
    }
    const fName = user.fName || "";
    const {
      name,
      address1,
      city,
      state,
      zip,
      show,
      storeName,
      flavors
    } = this.state;
    let store = {};
    if (show) {
      store = stores.find(s => s.name === storeName);
    }
    if (!this.state.coords.lat) {
      return (
        <div
          style={{
            height: "70vh",
            width: "70vw",
            color: "#eb793c",
            fontFamily: "Montserrat, sans-serif;"
          }}
        >
          {" "}
          Loading ..{" "}
        </div>
      );
    } else {
      return (
        <div
          className="where-to-buy-create"
          style={{
            paddingTop: "5rem",
            height: "auto",
            backgroundColor: "#fffff !important"
          }}
        >
          <div>
            {user.isAdmin && (
              <form onSubmit={this.handleSubmit} className="form add-store">
                <h4 style={{ textAlign: "center" }}>Add New Store, {fName}</h4>
                <label>Name: </label>
                <input
                  value={name}
                  name="name"
                  placeholder="store name"
                  onChange={this.handleChange}
                />
                <label>Address Line 1: </label>
                <input
                  value={address1}
                  name="address1"
                  placeholder="address line 1"
                  onChange={this.handleChange}
                />
                <label>City: </label>
                <input
                  value={city}
                  name="city"
                  placeholder="city"
                  onChange={this.handleChange}
                />
                <label>State: </label>
                <input
                  value={state}
                  name="state"
                  placeholder="state"
                  onChange={this.handleChange}
                  maxLength="2"
                />
                <label>Zip: </label>
                <input
                  value={zip}
                  name="zip"
                  placeholder="zip"
                  onChange={this.handleChange}
                  maxLength="5"
                />
                <label>Flavors: </label>
                <small>
                  list flavors separated by commas (Any Flavor is an option)
                </small>
                <input
                  value={flavors}
                  name="flavors"
                  placeholder="flavors"
                  onChange={this.handleChange}
                />
                <button type="submit">Create Location</button>
              </form>
            )}

            {this.state.show && <Pointer store={store} />}
            <div
              className="map-page"
              style={{ height: "auto", width: "100%" }}
            ></div>
            {/* please do not remove div below. this is so the maps position: absolute can be 'faked.' if you change the size of the map, you must change these accordingly to equal the same size ALLLEEEXXXAANNDDRRRRRAAA */}
            <ZipCodeSearch zipSearch={this.zipSearch} />
            <div
              style={{
                height: "90vh",
                width: "auto"
              }}
            >
              {stores.length && (
                <Map
                  google={this.props.google}
                  initialCenter={this.state.coords}
                  center={this.state.coords}
                  zoom={11}
                  style={{
                    height: "70vh",
                    width: "70vw",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  {stores.map(s => {
                    return (
                      <Marker
                        key={s.id}
                        onClick={this.mouseMaker}
                        title={s.name}
                        name={s.name}
                        position={{ lat: s.lat, lng: s.lng }}
                        icon={{
                          url: "../../assets/images/dezo-logo.png",
                          anchor: new google.maps.Point(32, 32),
                          scaledSize: new google.maps.Size(35, 35)
                        }}
                      />
                    );
                  })}
                </Map>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mD = {
  createStoreLocation: createStoreLocation,
  getAllStores: getAllStores
};

const mS = ({ stores, user }) => ({ stores, user });
const WhereToBuyCreate = connect(mS, mD)(_WhereToBuyCreate);

// export default WhereToBuyCreate;

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmr2BCU8-PycL9HHxbhLrQVV5gg9Q92CM" // can be found in secrets, may have to be replaced in development with the string val
})(WhereToBuyCreate);
