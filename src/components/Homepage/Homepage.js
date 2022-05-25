import { useState, useEffect } from "react"
import axios from "axios";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Love from "../../assets/Love.svg"
import Rectangle_1 from "../../assets/Rectangle_1.svg";
// import TableList from "../TableList/TableList";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import CardAndTable from "../CardAndTable/CardAndTable";
import Table from "../Table/Table";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [showSelectedData, setShowSelectedData] = useState(false);

  useEffect(() => {
    axios.get("http://199.34.21.254/persona/personas/0/10").then((response) => {
      response.data.map((ele) => {
        ele.isSelected = false;
        return ele;
      });
      setData(response.data);
    });
  }, []);
  
  const imageClick = (id) => {
    setData(
      data.map((el) =>
        el.persona_id === id
          ? Object.assign({}, el, { isSelected: !el.isSelected })
          : el
      )
    );
  };
  return (
    <div className="col-md-12">
      <div className="container">
        <div className="col-md-8">
          <div className="topBorder">
            <div className="design col-md-3">
              Crafted with <img src={Love} alt="Vector"></img> Love by Lollpop
              design tribe
            </div>
            <div class="row">
              <div className="heading col-md-12 ">
                Real <img src={Rectangle_1} alt="Rectangle_1"></img> People for
                your persona
              </div>
            </div>
          </div>
          <Table />
        </div>
        <button onClick={()=> setShowSelectedData(true)} >Show Selected Data</button>
        <CardAndTable/>
        {
          showSelectedData && 
        <Grid data={data} setShowSelectedData={setShowSelectedData} />
        }
        <Card data={data} imageClick={imageClick} />
      </div>
    </div>
  );
};
export default Homepage;
