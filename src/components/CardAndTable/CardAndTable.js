import React, { useEffect, useState } from "react";
import "./CardAndTable.css";
import Group7 from "../../assests/Group7.svg";
import table from "../../assests/table.svg";
import TableList from "../TableList/TableList";
import Card from "../Card/Card";
//import Card from "./components/Card"
const CardAndTable = () => {
  const [card, setCard] = useState(true);
  const [tablel, setTable] = useState(false);
  const [users, setUsers] = useState([]);
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
  const parentClick = (details) =>{
    console.log(details);
    const getSelectedValue = users.filter((ele) => ele.isSelected);
    if (
      (getSelectedValue.length < 4 && !details.isSelected) ||
      details.isSelected
    ) {
      setUsers(
        users.map((el) =>
          el.persona_id === details.persona_id
            ? Object.assign({}, el, { isSelected: !el.isSelected })
            : el
        )
      );
      setTimeout(() =>{
        console.log(users);
      }, 1000)
      
    } else {
      alert("you have selected less than 4");
    }
  }
  const onDeleteParent = (personID) =>{
    setUsers(
      users.map((el) =>
        el.persona_id === personID
          ? Object.assign({}, el, { isSelected: false })
          : el
      )
    );
  }
  useEffect(() => {
    fetchData();
  }, []);
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
      
      {users.length > 0 && card && <Card cardUsers={users} childImageClick={e => parentClick(e)} deleteChild={e => onDeleteParent(e)} />}
      {users.length > 0 && tablel && <TableList tableUsers={users} childImageClick={e => parentClick(e)} deleteChild={e => onDeleteParent(e)} />}
    </div>
  );
};
export default CardAndTable;
