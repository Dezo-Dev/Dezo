import React from "react";

export const TwentyOne = props => {
  return (
    <div>
      <section
        className="modal-main"
        style={{
          backgroundImage: "url(../../assets/images/wave-02.jpg)"
        }}
      >
        {/* <h1 className="modal-top" id="twenty-one-h1">Respectfully Wild&trade;</h1> */}
        <div className="modal-top">
          <img
            className="image-twenty-one"
            src="../../assets/images/white-logo-03.png"
          ></img>
        </div>
        <div>
          <h3 id="twenty-one">WHEN WERE YOU BORN?</h3>
          <form onSubmit={props.submitAge} className="form">
            <input
              className="inputs"
              id="enter-button"
              name="month"
              placeholder="MM"
              maxLength="2"
              onChange={props.onChange}
            />
            <input
              className="inputs"
              id="enter-button"
              name="day"
              placeholder="DD"
              maxLength="2"
              onChange={props.onChange}
            />
            <input
              className="inputs"
              id="enter-button"
              name="year"
              placeholder="YYYY"
              maxLength="4"
              onChange={props.onChange}
            />
            <button id="enter-button" type="submit">
              ENTER
            </button>
          </form>
          <h4 style={{ color:"white", padding:"2vw"}}>You must be 21 or older to enter this website</h4>
          <span id="error-twenty-one">{props.error}</span>
        </div>
      </section>
    </div>
  );
};
