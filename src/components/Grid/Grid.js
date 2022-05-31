import "./Grid.css";
import parvathamma from "../assests/parvathamma.svg";
import close from "../../assests/close.svg";
import remove from "../../assests/remove.svg";
import { useState } from "react";

const Grid = ({ data, setShowSelectedData }) => {
  const filteredData = data.filter((el) => el?.isSelected); 
//  let index = data.index(filteredData)
//   console.log(index)
// const index =(e)=>
//   filteredData.indexof(e?.persona_id)
// console.log(index)
//console.log(filteredData.map(setShowSelectedData))
//  for(var i=0;i<index;i++ )
//  {
//  }
// }
// for (var i = 0; i < data.length; i++) { 
//   if (data[i] == setShowSelectedData) {
//       return i;
     
//   }
 
// }
// console.log(index)
// console.log(filteredData.getIndex(setShowSelectedData))


  return (
    <div className="container-box2">
        <div className="close1 " onClick={() => setShowSelectedData(false)}>
        <button className="close_button"> close
        <img src={close} className="" alt="close" />
        </button>
        </div>
      <p className="selected2">
        Selected
        <span className="selected_number">0{filteredData.length}/04</span>
      </p>
      <div className="col-md-5">
        {filteredData.map((e) => {
          return (
            <div className="box1" key={e?.persona_id} >
              <div>
                <img className="image1" src={parvathamma} alt="parvathamma" />
              </div>
              <span className="persona_name">
                {e.firstname} {e.lastname}
              </span>
              <p className="address2">
                {e.age} Years, {e.occupation}.<br></br>
                {e.location}, {e.state}
              </p>
                <button className="delete_button1 delete1" onClick={() => console.log(e?.persona_id)}>
                  <img src={remove} alt="remove" ></img>
                </button>
            </div>
          );
        })}
        <div
          className="download1"
          onClick={() => console.log("on Click close button---")}
        >
          <button className="download_bottem">Download Real Personas</button>
        </div>
      </div>
    </div>
  );
};
export default Grid;
