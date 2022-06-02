import "./Grid.css";
import parvathamma from "../../assests/parvathamma.svg";
import close from "../../assests/close.svg";
import remove from "../../assests/remove.svg";
import React, { useEffect, useState } from "react";

const Grid = ({ data, setShowSelectedData }) => {
  const [filteredData, setFilteredData] = useState(data.filter((el) => el?.isSelected)); 
    const onDelete = (e, item) =>{
      const getIndex = filteredData.findIndex(x => x.persona_id === item.persona_id);
      const newVar=[...filteredData]
      newVar.splice(getIndex,1);
      setFilteredData(newVar);
    }
  return (
    <div className="container-box2">
        <div className="close1 " onClick={() => setShowSelectedData(false)}>
          <button className="close_button"> close
            <img src={close} alt="close" />
          </button>
        </div>
     
      <p className="selected2">
        Selected
        <span className="selected_number">0{filteredData.length}/04</span>
      </p>
      <div className="col-md-5">
        {filteredData.map((ele) => {
          return (
            <div className="box1" key={ele?.persona_id} >
              <div>
                <img className="image1" src={parvathamma} alt="parvathamma" />
              </div>
              <span className="persona_name">
                {ele.firstname} {ele.lastname}
              </span>
              <p className="address2">
                {ele.age} Years, {ele.occupation}.<br></br>
                {ele.location}, {ele.state}
              </p>
              <div className="delete_person ">
                <div type="button" className="delete" onClick={e => onDelete(e, ele)}>
                  <img src={remove}alt="remove" />
                </div>
              </div>
            </div>
          );
        })}
        <div
          className="download1"
          onClick={() => console.log("on Click download button---")}
        >
          <button className="download_bottom">Download Real Personas</button>
        </div>
      </div>
    </div>
  );
};
export default Grid;
