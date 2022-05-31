import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TableList.css";
import parvathamma from "../../assests/parvathamma.svg";
import Line from "../../assests/Line.svg";
import checkbox from "../../assests/checkbox.svg";
import download from "../../assests/download.svg";
import Grid from "../Grid/Grid";
import classNames from "classnames";
import useSticky from "../StickyHeader/StickyHeader"
const TableList = () => {
  const [data, setData] = useState([]);
  const { sticky, stickyRef } = useSticky();
  const [showSelectedData, setShowSelectedData] = useState(false);
  
  useEffect(() => {
    axios.get("http://199.34.21.254/persona/personas/0/10").then((response) => {
      response.data.map((ele) => {
        ele.isSelected = false;
        return ele;
      });
      setData(response.data);
    });
  }, []);

  const tableClick = (details) => {
    const getSelectedValue = data.filter((ele) => ele.isSelected);
    if (
      (getSelectedValue.length < 4 && !details.isSelected) ||
      details.isSelected
    ) {
      setData(
        data.map((el) =>
          el.persona_id === details.persona_id
            ? Object.assign({}, el, { isSelected: !el.isSelected })
            : el
        )
      );
    } else {
      alert("you have selected less than 4");
    }
  };
  // console.log(">>>", selectedItems);
  return (
    <div className="tablelist">
      <div>
        <div>
          <table className="col-md-12 table_grid">
            {data.map((details) => (
              <tr
                className={`row-size ${
                  details?.isSelected ? "selected-border" : "normal-border"
                }`}
                onClick={() => {
                  tableClick(details);
                  // handleChange();
                }}
                // onChange={handleChange}
              >
                <td className="col-md-4 " key={details.persona_id}>
                  <img
                    className="col-md-5 person_image "
                    alt="none"
                    // src={item.server_file_name}
                    src={parvathamma}
                  />
                  <span className="col-md-7 person_name">
                    {details.firstname} {details.lastname}
                  </span>
                </td>
                <td className="col-md-2 text">{details.age} years</td>
                <td className="col-md-2 text">{details.occupation}</td>
                <td className="col-md-4 text">
                  <span className="col-md-8 location">{details.location}</span>
                  {details?.isSelected && (
                    <img
                      className="checkbox"
                      src={checkbox}
                      onClick={() => {
                        {
                          tableClick(details);
                        }
                      }}
                    ></img>
                  )}
                </td>
              </tr>
            ))}
          </table>
          <span
            onClick={() => setShowSelectedData(true)}
            className={classNames("download_data1","button", { sticky })}
            style={{
              height: sticky
                ? `${stickyRef.current?.clientHeight}px`
                : '0px'
            }}ref={stickyRef}
          >
            <img className="download_img" src={download} />
          </span>
          {showSelectedData && (
            <Grid data={data} setShowSelectedData={setShowSelectedData} />
          )}
        </div>
      </div>
    </div>
  );
};
export default TableList;
