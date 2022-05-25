import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Frame.css";
import parvathamma from '../assests/parvathamma.svg'
import { mergeStyles } from "react-select";
// import photo2 from '../assests/photo2.svg'
// import photo3 from '../assests/photo3.svg';

const Frame = () => {
const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://199.34.21.254/persona/personas/0/10").then((response) => {
      setData(response.data);
    });
  }, []);
  // if(
  //   data.indexOf % 2 != 0
    
  // )
  return (
    <span>
      <div className="col-md-12">
        
        {data.map((details) => (
          
          <div key={details.id}>
        <span className="">
          <span className="cardContainer1">
            <span className="image1">
              <img src={parvathamma} alt="parvathamma" />
            </span>
            <span className="personDetail">
              <span className="">
                <h4 className="Name1">{details.firstname} {details.lastname}</h4>
              </span>
              <span className="">
                <p className="p1">
                {details.age} years {details.occupation}  {details.location} </p>
              </span>
            </span>
          </span>
        </span>
        {/* <div class="col-4">
          <div className="cardContainer2">
            <img src={photo2} alt="photo2" />
          </div>
          <div className="text-block2">
            <h4 className="Name2">Preetham Jain</h4>
            <p className="p2">58 Years, Student, Mysore, Karnataka</p>
          </div>
        </div>
        <div class="col-4">
          <div className="cardContainer3">
            <img src={photo3} alt="photo3" />
          </div>
          <div className="text-block3">
            <h4 className="Name3">Sweta Pandit</h4>
            <p className="p3">30 Years, Female, Mysore, Karnataka</p>
          </div>
        </div> */}
      
        </div>
      ))}
      </div>
     
    </span>
  );
};

export default Frame;
