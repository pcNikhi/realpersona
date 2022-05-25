import "./CardAndTable.css";
import Group7 from "../../assets/Group7.svg";
import table from "../../assets/table.svg";
// import Grid from "../Grid/Grid";
// import Card from "./components/Card"
const CardAndTable = () => {
  return (
    <div className="page1">
      <p className="display1">Displaying</p>
      <p className="person1">23 Personas</p>
      <table className="container1">
        <tr>
          <td>
            <img src={Group7} alt="card"></img>Card
          </td>
          <td>
            <img src={table} alt="table"></img>Table
          </td>
        </tr>
      </table>
    </div>
  );
};
export default CardAndTable;
