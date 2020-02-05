import React, { useEffect, useState } from "react";

const ZipCodeSearch = ({ zipSearch }) => {
  const [selected, setSelected] = useState("Any Flavor");
  const [zipcode, setZipcode] = useState("");

  const changeSelectedDrink = name => {
    setSelected(name);
  };

  const onChange = e => {
    setZipcode(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    zipSearch(zipcode, selected);
    setZipcode("");
    setSelected("Any Flavor");
  };

  useEffect(() => {}, [selected, zipcode]);
  const flavors = [
    "Any Flavor",
    "Spiked Coconut Water",
    "Spiked Cactus Water",
    "Spiked Watermelon Water"
  ];
  return (
    <div>
      <form className="location-form" onSubmit={submit}>
        <input
          className="map-inputs"
          id="find-button"
          name="zipcode"
          placeholder="ZIPCODE"
          maxLength="5"
          value={zipcode}
          onChange={onChange}
        />
        <div className="nav-item dropdown">
          <div
            className="flavor-selector dropdown-toggle"
            id="find-button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {selected}
          </div>
          <div
            className="dropdown-menu dropdown-primary"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {flavors.map((f, i) => {
              const name = f.split(" ")[1].toLowerCase();
              const classN = "dropdown-item";
              const id = `dropdown-item-${name}`;
              return (
                <div
                  key={i}
                  className={classN}
                  id={id}
                  onClick={() => changeSelectedDrink(f)}
                >
                  {f}
                </div>
              );
            })}
          </div>
        </div>
        <button id="find-button" type="submit">
          FIND
        </button>
      </form>
    </div>
  );
};

export default ZipCodeSearch;
