import "./CardAndTable.css"; 
import Group7 from "../assests/Group7.svg";
import table from "../assests/table.svg";
//import Frame from "./components/Frame"
const CardAndTable = () => {
  return (
    <div className="page1">
      <p className="display1">Displaying</p>
      <p className="person1">23 Personas</p>
      <table className="container1">
        <tr>
            <td><img src={Group7} alt='card'></img>Card</td>
            <td><img src={table} alt='table'></img>Table</td>
        </tr>
      </table>
      {/* <Frame/> */}
    </div>
  );
};
export default CardAndTable;