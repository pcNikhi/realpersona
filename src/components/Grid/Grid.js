import "./Grid.css";
import "./assets"
// import parvathamma from "./assets/parvathamma.svg";
import close from "./assets/close.svg"
import vector from "./assets/vector.svg"
const Grid = () => {
  return (
    <div className="container-box">
      <p className="close">Close</p>

      <div className="cloz" onClick={()=> console.log("on Click close button---")}>
        <img src={close} alt="close" />
      </div>
      <p className="selected">Selected</p>
      <p className="date">03/04</p>
      <div className="col-md-5">
        <div className="box1">
          {/* <div className="image1">
              <img src={parvathamma} alt="parvathamma" />
            </div> */}
          <span className="col-md-3">Parvatamma Gowda</span>
          <p className="address">
            58 Years, Housewife.<br></br>
            Mysore, Karnataka
          </p>
          <div className="delete1">
            <img src={vector} alt="vector" />
          </div>
        </div>
        <div className="box2">
          <span className="col-md-7" />
        </div>
        <div className="box3">
          <span className="col-md-2" />
        </div>
        <div className="box4">
          <span className="col-md-2">helloo</span>
        </div>
        <div className="download">
          <span className="col-md-2">Download Real Personas</span>
        </div>
      </div>
    </div>
  );
};

export default Grid;
