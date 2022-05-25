import "./Homepage/Homepage.css"; 
import Group7 from "./assets/Group7.svg";
import table from "./assets/table.svg";
import Frame from "./components/Frame"  
const HomePage = () => {
  return (
    <div className="page">
      <p className="display">Displaying</p>
      <p className="person">23 Personas</p>
      <table className="container">
        <tr>
            <td><img src={Group7} alt='card'></img>Card</td>
            <td><img src={table} alt='table'></img>Table</td>
        </tr>
      </table>
      <Frame/>
    </div>
  );
};
export default HomePage;
