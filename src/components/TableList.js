import React, { useEffect, useState } from "react";
import axios from "axios";
import './TableList.css'
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
          <div>
            <table className="col-md-12 table tablegrid">
              <tr> 
                <td className="col-md-4">
                  <img
                    style={{ width: 175, height: 175 }}
                    className="tc br3"
                    alt="none"
                    src={item.server_file_name}
                  />
                  <div classnae='table_name'>{item.firstname}{item.lastname}</div>
                </td>
                <td className="col-md-2">
                  {item.age}
                </td>
                <td className="col-md-2">
                  {item.occupation}
                </td>
                <td className="col-md-4">
                  {item.location}
                </td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TableList;
