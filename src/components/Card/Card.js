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
          el.persona_id === details.persona_id
            ? Object.assign({}, el, { isSelected: !el.isSelected })
            : el
        )
      );
    } else {
      alert("you have selected less than 4");
    }
  };
 ;
  return (
    <Fragment>
      <div className="col-md-12 card-container4">
        {data.map((details) => (
          <div
            className={`single-card1 ${
              details?.isSelected ? "selected-border" : "normal-border1"
            }`}
            onClick={() => {
              imageClick(details);
            }}
          >
            <img
              className={`image-border1 ${details?.isSelected && "border"}`}
              key={details?.persona_id}
              src={parvathamma}
              alt="parvathamma"
            />

            <div className="card-details-con1">
              <h4>
                {details.firstname} {details.lastname}
              </h4>
              <div className="dtls-con1">
                <div>
                  <p>
                    {details.age} years {details.occupation} {details.location}{" "}
                  </p>
                </div>
                <div>
                  {details?.isSelected && (
                    <img
                      className="input-box2"
                      src={Check}
                      alt="Check"
                      onClick={() => {
                        {
                          imageClick(details);
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
          className={classNames("download_data", { sticky })}
          style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : "0px",
          }}
          ref={stickyRef}
        >
          <img className="download_img" src={download} />
          <span>
            {data.filter(el=> el?.isSelected && el?.isSelected).length > 0 ? (
              <img className="ellipse" src={Ellipse} alt="Ellipse" />
            ): null}
          </span>
        </div>

        {showSelectedData && (
          <Grid data={data} setShowSelectedData={setShowSelectedData} />
        )}
      </div>
    </Fragment>
  );
};

export default Card;
