import React, { useEffect, useState } from "react";
import axios from "axios";
import './TableList.css'
import  parvathamma from "../../assets/parvathamma.svg";
const TableList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://199.34.21.254/persona/personas/0/10").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="tablelist">
      {data.map((item) => (
        <div key={item.id}>
          <span>
            <table className="row-md-12 table_grid">
              <tr border> 
                <td className="row-md-4">
                  <img
                   className="row-md-5 person_image "
                    alt="none"
                    // src={item.server_file_name}
                    src={parvathamma}
                  />
                  <span className='row-md-7 person_name'>{item.firstname} {item.lastname}</span>
                </td>
                <td className="row-md-2 text">
                  {item.age} years
                </td>
                <td className="row-md-2 text">
                  {item.occupation}
                </td>
                <td className="row-md-4 text">
                  {item.location}
                </td>
              </tr>
            </table>
          </span>
        </div>
      ))}
    </div>
  );
};
export default TableList;
