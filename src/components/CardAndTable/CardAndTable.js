import { useState } from "react";
import "./CardAndTable.css";
import Group7 from "../assests/Group7.svg";
import table from "../assests/table.svg";
import TableList from "../TableList";
import Frame from "../Frame/Frame";

//import Frame from "./components/Frame"
const CardAndTable = () => {
  const [card, setCard] = useState(true);
  const [tablel, setTable] = useState(false);
  const cardHandler = () => {
    setCard(true);
    setTable(false);
  };
  const tableHandler = () => {
    setCard(false);
    setTable(true);
  };
  return (
    <div className="page1">
      <p className="display1">Displaying</p>
      <p className="person1">23 Personas</p>
      <table className="container1">
        <tr>
          {/* <div
            className="cloz"
            onClick={() => console.log("on Click close button---")}
          >
            <img src={close} alt="close" />
          </div> */}
          {/* <button onClick={() => console.log("on Click card button---")}></button> */}
          <td >
            <button className="button-card" onClick={cardHandler}>
               <img src={Group7} alt="card"></img>card
            </button>
          </td>
          <td>
            <button className="button-card" onClick={tableHandler}>
               <img src={table} alt="table"></img>Table
            </button>
          </td>
        </tr>
      </table>
      {card && (<Frame/>
      )}
      {tablel && (
        <TableList/>
      )}
      {/* <Frame/> */}
    </div>
  );
};
export default CardAndTable;
