import React from "react";

export const TwentyOne = props => {
  return (
    <div>
      <section className="modal-main modal-top">
        <h2>Respectfully Wild</h2>
        <div className="modal-bottom">

          <h3>WHEN WERE YOU BORN?</h3>
          <form onSubmit={props.submitAge}>
            <input
              className="inputs"
              name="month"
              placeholder="MM"
              maxLength="2"
              onChange={props.onChange}
            />
            <input
              className="inputs"
              name="day"
              placeholder="DD"
              maxLength="2"
              onChange={props.onChange}
            />
            <input
              className="inputs"
              name="year"
              placeholder="YYYY"
              maxLength="4"
              onChange={props.onChange}
            />
            <button type="submit">ENTER</button>
          </form>
          <p id='enter'>You must be 21 or older to enter this website</p>
          <span>{props.error}</span>
        </div>
      </section>
    </div>
  );
};
