import React, { useEffect, useState } from "react";
import "./CardAndTable.css";
import Group7 from "../../assests/Group7.svg";
import table from "../../assests/table.svg";
import TableList from "../TableList/TableList";
import Card from "../Card/Card";
//import Card from "./components/Card"
const CardAndTable = ({ filterLocation, filterOccupation }) => {
  const [card, setCard] = useState(true);
  const [tablel, setTable] = useState(false);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState('')
  const cardHandler = () => {
    setCard(true);
    setTable(false);
  };
  const [shadow, setShadow] = useState(false);
  const onClickShadow = () => setShadow(!shadow);
  const tableHandler = () => {
    setCard(false);
    setTable(true);
  };
  const fetchData = () => {
    fetch("http://199.34.21.254/persona/personas/0/10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const  filteredOccupation = users.filter(({ occupation }) => {
    return filterOccupation ? occupation === filterOccupation : users;
  });
  const filteredLocation = users.filter(({ location }) => {
    return filterLocation ? location === filterLocation : users;
  });
  
  return (
    <div className="page1 col-md-12">
      <p className="display1">Displaying</p>
      <p className="person1">{users.length} Personas</p>
      <table className="container1">
        <tr>
          <td
            className={`button-border ${card ? "bottom-image" : ""}`}
            onClick={onClickShadow}
          >
            <button className="button-card " onClick={cardHandler}>
              <img className="button-text" src={Group7} alt="card"></img>
              <grid className="card-text"> Card</grid>
            </button>
          </td>
          <td className={`button-border ${tablel ? "bottom-image" : ""}`}>
            <button className="button-card" onClick={tableHandler}>
              <img className="button-text" src={table} alt="table"></img>
              <grid className="card-text">Table</grid>
            </button>
          </td>
        </tr>
      </table>

      {users.length > 0 && card && <Card cardUsers={users} filteredOccupation={filteredOccupation&&filteredLocation}/>}
      {users.length > 0 && tablel && <TableList tableUsers={users} filteredOccupation={filteredOccupation&&filteredLocation} />}
    </div>
  );
};
export default CardAndTable;
