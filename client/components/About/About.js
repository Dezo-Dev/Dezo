import React from "react";
import Products from "../Products/Products";
// import ConnectWith from "../Connect/ConnectWIth";
// import Press from "../Press/Press";
import { Link } from "react-router-dom";
// import CreateProduct from "../Products/CreateProduct";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { PictureGrid } from "./PictureGrid";


class About extends React.Component {
  render() {
    return (
      <div>
        {/* <div onClick={() => this.myRef.current.scrollIntoView(false)}> */}
        <section className="about-container">
          <img src="../../assets/images/drinks.jpeg" width="100%" />
        </section>
        {/* <section id='about-slogan' onClick={this.scrollToRef}>
          <div>
            <h2 id=''>
              The World's Most Vitalizing Spiked Fruit Water
            </h2>
          </div>
        </section> */}
        {/* not sure if you want this here for the scroll thingy
            if you do, we could just import a bunch of components
            here and they will display in order or whatever */}
        <Page2 />

        <Page3 />
        <div id="prod-cont">
          <h1
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "3rem",
              marginBottom: "-4vh"
            }}
          >
            Dezo Flavors
          </h1>
          <Products />
        </div>
        {/* <CreateProduct myRef={this.myRef} /> */}
        {/* <CreateProduct /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-10vh"
          }}
        >
          <div className="find-button">
            <Link to="/buy" style={{ textDecoration: "none", color: "white" }}>
              Find Dezo
            </Link>
          </div>
          <img src="../../assets/images/map.png" width="70%" />
        </div>
        <h1
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "4rem",
            color: "#008080"
          }}
        >
          Follow us on IG{" "}
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.instagram.com/drinkdezo/"
            target="_blank"
          >
            @DrinkDezo
          </a>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <section
            style={{ display: "flex", width: "90vw", paddingBottom: "10vh" }}
          >
            <PictureGrid />
          </section>
        </div>
      </div>
    );
  }
}

export default About;
