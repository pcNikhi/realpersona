import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Love from "../../assests/Love.svg";
import CardAndTable from "../CardAndTable/CardAndTable";
import headerPhoto from "../../assests/headerPhoto.svg";
import Table from "../Table/Table";

const Homepage = () => {

  return (
    <div className="col-md-12 col col-sm-12 ">
      <div className="container">
        <div className="col-md-8 col col-sm-12">
          <div className="topBorder">
            <div className="design col-md-3 col col-sm-6">
              Crafted with <img src={Love} alt="Vector"></img>
              <span className="love-color"> Love</span> by Lollpop design tribe
            </div>
            <div class="row">
              <div className="heading col-md-12 ">
                Real <img src={headerPhoto} alt="Rectangle_1"></img> People for
                your persona
              </div> 
            </div>
          </div>
          
        </div>
        <nav >
            <Table />
          </nav>
        {/* <CardAndTable /> */}
      </div>
    </div>
  );
};
export default Homepage;
