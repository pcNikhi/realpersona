import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Love from "../../assests/Love.svg";
import Rectangle_1 from "../../assests/Rectangle_1.svg";
import TableList from "../Table/Table";
import Card from "../Card/Card";
import CardAndTable from "../CardAndTable/CardAndTable";
import headerPhoto from "../../assests/headerPhoto.svg";
import Table from "../Table/Table";

const Homepage = () => {
  return (
    <div className="col-md-12">
      <div className="container">
        <div className="col-md-8">
          <div className="topBorder">
            <div className="design col-md-3">
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
          <div className="stickyheader">
            <Table />
          </div>
        </div>
        <CardAndTable />
      </div>
    </div>
  );
};
export default Homepage;
