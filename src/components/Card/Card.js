import React, { useState } from "react";
import { Fragment } from "react";
import "./Card.css";
import parvathamma from "../../assests/parvathamma.svg";
import Check from "../../assests/Check.svg";
import download from "../../assests/download.svg";
import Grid from "../Grid/Grid";
import useSticky from "../StickyHeader/StickyHeader";
import classNames from "classnames";
import Ellipse from "../../assests/Ellipse.svg";

const Card = ({cardUsers, childImageClick, deleteChild}) => {
  const [data, setData] = useState(cardUsers);
  const [showSelectedData, setShowSelectedData] = useState(false);
  const [filteredData, setFilteredData] = useState(false)
  const { sticky, stickyRef } = useSticky();

  // useEffect(() => {
  //   axios.get("http://199.34.21.254/persona/personas/0/10").then((response) => {
  //     response.data.map((ele) => {
  //       ele.isSelected = false;
  //       return ele;
  //     });
  //     setData(response.data);
  //   });
  // }, []);

  

  const imageClick = (details) => {
    childImageClick(details);
    
  };
  return (
    <Fragment>
      <div className="col-md-12 card-container4">
        {cardUsers.map((details) => (
          <div
            className={`single-card1 ${
              details?.isSelected ? "selected-border1" : "normal-border1"
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
              <div className="persona_fname">{details.firstname}</div>
              <div className="persona_lname">{details.lastname}</div>
              <div className="dtls-con1">
                <div>
                  <div className="persona_age">
                    {details.age} years {details.occupation}
                  </div>
                  <div className="persona_location">{details.location} </div>
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
          className={classNames("download_data", "", { sticky })}
          style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : "px",
          }}
          ref={stickyRef}
        >
          <img className="download_img" src={download} />
          <span>
            {cardUsers.filter((el) => el?.isSelected && el?.isSelected).length >
            0 ? (
              <img className="ellipse" src={Ellipse} alt="Ellipse" />
            ) : null}
          </span>
        </div>

        {showSelectedData && (
          <Grid data={cardUsers} onChildDelete={e => deleteChild(e)} setShowSelectedData={setShowSelectedData} />
        )}
      </div>
    </Fragment>
  );
};

export default Card;
