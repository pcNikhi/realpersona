import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import "./Card.css";
import parvathamma from "../../assests/parvathamma.svg";
import Check from "../../assests/Check.svg";
import download from "../../assests/download.svg";
import Grid from "../Grid/Grid";
import useSticky from "../StickyHeader/StickyHeader";
import classNames from "classnames";
import Ellipse from "../../assests/Ellipse.svg";

const Card = () => {
  const [data, setData] = useState([]);
  const [showSelectedData, setShowSelectedData] = useState(false);
  const { sticky, stickyRef } = useSticky();

  useEffect(() => {
    axios.get("http://199.34.21.254/persona/personas/0/10").then((response) => {
      response.data.map((ele) => {
        ele.isSelected = false;
        return ele;
      });
      setData(response.data);
    });
  }, []);

  const imageClick = (details) => {
    const getSelectedValue = data.filter((ele) => ele.isSelected);
    if (
      (getSelectedValue.length < 4 && !details.isSelected) ||
      details.isSelected
    ) {
      setData(
        data.map((el) =>
          el.persona_id === details
            ? Object.assign({}, el, { isSelected: !el.isSelected })
            : el
        )
      );
    } else {
      alert("you have selected less than 4");
    }
  };
  return (
    <Fragment>
      <div className="col-md-12 card-container4">
        {data.map((details) => (
          <div
            key={details?.persona_id}
            className={`single-card1 ${
              details?.isSelected ? "selected-border" : "normal-border1"
            }`}
            onClick={() => imageClick(details?.persona_id)}
          >
            <img
              className={`image-border1 ${details?.isSelected && "border"}`}
              src={parvathamma}
              alt="parvathamma"
            />

            <div className="card-details-con1">
              <div className="persona_fname">
                {details.firstname} 
              </div>
              <div className="persona_lname">{details.lastname}</div>
              <div className="dtls-con1">
                <div>
                <div className="persona_age">
                    {details.age} years {details.occupation} 
                </div>
                <div className="persona_location" >
                {details.location}{" "}   
                </div>
                </div>
                <div>
                  {details?.isSelected && (
                    <input
                      className="input-box2"
                      // src={Check}
                      type="checkbox"
                      checked
                      onClick={() => {
                        {
                          imageClick(details?.persona_id);
                        }
                      }}
                    />
                  )}
                </div>
                <div>
                  {details?.isSelected && (
                    <img
                      className="ellipse"
                      src={Ellipse}
                      onClick={() => {
                        {
                          imageClick(details?.persona_id);
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          onClick={() => setShowSelectedData(true)}
          className={classNames("download_data", "", { sticky })}
          style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : "px",
          }}
          ref={stickyRef}
        >
          <img className="download_img" src={download} />
        </div>

        {showSelectedData && (
          <Grid data={data} setShowSelectedData={setShowSelectedData} />
        )}
      </div>
    </Fragment>
  );
};

export default Card;
