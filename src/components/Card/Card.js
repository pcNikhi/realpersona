import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import "./Card.css";
import parvathamma from "../../assets/parvathamma.svg";
import checkbox from "../../assets/checkbox.svg";
import download from "../../assests/download.svg";
import Grid from "../Grid";
const Card = () => {
  const [data, setData] = useState([]);
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
  
  const imageClick = (id) => {
    setData(
      data.map((el) =>
        el.persona_id === id
          ? Object.assign({}, el, { isSelected: !el.isSelected })
          : el
      )
    );
  };
  return (
    <Fragment>
      <div className="col-md-12 card-container4">
        {data.map((details) => (
          <div
            key={details?.persona_id}
            className={`single-card1 ${
              details?.isSelected ? "selected-border1" : "normal-border1"
            }`}
            onClick={() => imageClick(details?.persona_id)}
          >
            <img
              className={`image-border1 ${details?.isSelected && "border"}`}
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
                      src={checkbox}
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
         <button
            className="download_data"
            onClick={() => setShowSelectedData(true)}
          >
            <img src={download} />
          </button>
          {showSelectedData && (
            <Grid data={data} setShowSelectedData={setShowSelectedData} />
          )}
      </div>
    </Fragment>
  );
};

export default Card;
