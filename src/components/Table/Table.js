import React, { useState } from "react";
import "./Table.css";
import background from "../../assests/background.svg";
// import CardAndTable from "../CardAndTable/CardAndTable";
import classNames from "classnames";
import useSticky from "../StickyHeader/StickyHeader";
import headerPhoto from "../../assests/headerPhoto.svg";
// import TableList from "../TableList/TableList";
import Card from "../Card/Card";
const Table = () => {
  const { sticky, stickyRef } = useSticky();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // const [location, setLocation] = useState("");
  // const [occupation, setOccupation] = useState("");
  const [filterLocation, setfilterLocation] = useState("");
  const [filterOccupation, setFilterOccupation] = useState("");
  const selectLocation = (filterLocation) => {
    setfilterLocation(filterLocation);
    console.log(filterLocation);
  };
  const selectOccupation = (filterOccupation) => {
    setFilterOccupation(filterOccupation);
    console.log(filterOccupation);
  };
  const handleReset = (e) => {
    setAge((e.target.value = ""));
    setGender((e.target.value = ""));
    // setLocation((e.target.value = ""));
    setfilterLocation((e.target.value = ""));
    setFilterOccupation((e.target.value = ""));
  };
  const card = {Card}
  return (
    <div className="table-container">
      <div className="table-shadow">
        <table
          className={classNames("table1 col-md-12", "table", { sticky })}
          style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : "0px",
          }}
          ref={stickyRef}
        >
          <tr>
            <td
              className={` ${sticky ? "table-photo1 col-2" : "table-photo"} `}
            >
              <img className="stickyphoto" src={headerPhoto} alt="headerPhoto"></img>
            </td>
            <td className="col-md-2 rowcol">
              Age
              <select
                className="dropdownList col-md-12"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              >
                <option className="optionDrop" value="18-30 years">
                  18-30 years
                </option>
                <option className="optionDrop" value="30-45 years">
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
            <td className="col-md-2 rowcol">
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
            <td className="col-md-2 rowcol">
              Location
              <select
                className="dropdownList col-md-12"
                onChange={(e) => {
                  // setLocation(e.target.value);
                  selectLocation(e.currentTarget.value);
                }}
                value={filterLocation}
              >
                <option className="optionDrop" value="Delhi">
                  Delhi
                </option>
                <option className="optionDrop" value="Mumbai">
                  mumbai
                </option>
                <option className="optionDrop" value="Hyderabad">
                  Hyderabad
                </option>
                <option className="optionDrop" value="Bangalore">
                  Bangalore
                </option>
              </select>
            </td>
            <td className="col-md-2 rowcol">
              Occupation
              <select
                className="dropdownList col-md-12"
                onChange={(e) => selectOccupation(e.currentTarget.value)}
                value={filterOccupation}
                // value={filterLocation}
                // onChange={(e) => }
              >
                {/* <option value={""}>select</option> */}
                <option className="optionDrop" value="Labour">
                  Labour
                </option>
                <option classNamzee="optionDrop" value="Receptionist">
                  Receptionist
                </option>
                <option className="optionDrop" value="CEO">
                  CEO
                </option>
                <option className="optionDrop" value="Software Engineer">
                  Software Engineer
                </option>
              </select>
            </td>
            <td
              className={` ${
                sticky ? "table-filters col-md-2" : "table-photo"
              } `}
            >
              <button
                type="button"
                className="clear-filters"
                onClick={handleReset}
              >
                Clear Filters
              </button>
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
      {/* {
        <Card
          filterLocation={filterLocation}
          filterOccupation={filterOccupation}
        />
      } */}
    </div>
  );
};
export default Table;
