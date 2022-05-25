import React, { useState } from "react";
import "./Table.css";
import background from "../../assests/background.svg";
import CardAndTable from "../CardAndTable/CardAndTable";
const Table = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const handleReset = (e) => {
    setAge((e.target.value = ""));
    setGender((e.target.value = ""));
    setLocation((e.target.value = ""));
    setOccupation((e.target.value = ""));
  };
  console.log(age);
  return (
    <div className="table-container">
      <div className="table-shadow">
        <table className="table1 col-md-12 ">
          <tr>
            <td className="col-md-3 rowcol">
              Age
              <select
                className="dropdownList col-md-12"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                
              >
                <option className="optionDrop" value="18-30 years">
                  18-30 years
                </option>
                <option className="optionDrop" value="30-45 year">
                  30-45 years
                </option>
                <option className="optionDrop" value="45-60 years">
                  45-60 years
                </option>
                <option className="optionDrop" value="60-80 years">
                  60-80 years
                </option>
              </select>
            </td>
            <td className="col-md-3 rowcol">
              Gender
              <select
                className="dropdownList col-md-12"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option className="optionDrop" value={""}>
                  Male
                </option>
                <option className="optionDrop">Female</option>
              </select>
            </td>
            <td className="col-md-3 rowcol">
              Location
              <select
                className="dropdownList col-md-12"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              >
                <option className="optionDrop" value={""}>
                  Karnataka
                </option>
                <option className="optionDrop">Maharatra</option>
                <option className="optionDrop">Goa</option>
              </select>
            </td>
            <td className="col-md-3 rowcol">
              Occupation
              <select
                className="dropdownList col-md-12"
                onChange={(e) => setOccupation(e.target.value)}
                value={occupation}
              >
                <option value={""}>select</option>
                <option className="optionDrop" value={""}>
                  Farmer
                </option>
                <option className="optionDrop">Teacher</option>
                <option className="optionDrop">Farmer</option>
              </select>
            </td>
          </tr>
        </table>
      </div>

      <div className="col-md-8 background">
        <img
          src={background}
          alt="background"
          className=" col-md-9 card-bg-img"
        />
        <p className="col-md-2" style={{ paddingLeft: "0.5rem" }}>
          <button type="button" className="clear-filters" onClick={handleReset}>
            Clear Filters
          </button>
        </p>
      </div>
    </div>
  );
};
export default Table;
