import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Vector from "./assests/Vector.svg";
import Rectangle_1 from "./assests/Rectangle_1.svg";
import TableList from "./TableList";
import Table from "./Table";
const Homepage = () => {
  return (
    <div className="col-md-12">
      <div className="container">
        <div className="col-md-8">
          <div className="topBorder">
            <div className="design col-md-3">
              Crafted with <img src={Vector} alt="Vector"></img> Love by Lollpop
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
        
        <TableList/>
      </div>
     
    </div>
  );
};
export default Homepage;
