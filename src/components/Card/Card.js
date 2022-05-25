import React, { Fragment } from "react";
import "./Card.css";
import parvathamma from "../../assets/parvathamma.svg";
import checkbox from "../../assets/checkbox.svg";

const Card = ({ data, imageClick }) => {

  return (
    <Fragment>
      <div className="card-container">
        {data.map((details) => (
          <div
            key={details?.persona_id}
            className={`single-card ${
              details?.isSelected ? "selected-border" : "normal-border"
            }`}
            onClick={() => imageClick(details?.persona_id)}
          >
            <img
              className={`image-border ${details?.isSelected && "border"}`}
              src={parvathamma}
              alt="parvathamma"
            />

            <div className="card-details-con">
              <h4>
                {details.firstname} {details.lastname}
              </h4>
              <div className="dtls-con">
                <div>
                  <p>
                    {details.age} years {details.occupation} {details.location}{" "}
                  </p>
                </div>
                <div>
                  {details?.isSelected && (
                    <img
                      className="input-box"
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
      </div>
    </Fragment>
  );
};

export default Card;
