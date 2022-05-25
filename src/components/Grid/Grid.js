import "./Grid.css";
import parvathamma from "../../assets/parvathamma.svg";
import close from "../../assets/close.svg";
import vector from "../../assets/vector.svg";

const Grid = ({ data, setShowSelectedData }) => {
  const filteredData = data.filter((el) => el?.isSelected);

  return (
    <div className="container-box">
      <p className="close" onClick={() => setShowSelectedData(false)}>
        Close
      </p>

      <div
        className="cloz"
        onClick={() => console.log("on Click close button---")}
      >
        <img src={close} alt="close" />
      </div>
      <p className="selected">Selected {filteredData.length}</p>
      <div className="col-md-5">
        {filteredData.map((e) => {
          return (
            <div className="box1" key={e?.persona_id}>
              <div>
                <img className="image1" src={parvathamma} alt="parvathamma" />
              </div>
              <span className="firstname">{e.firstname}</span>
              <p className="address">
                58 Years, Housewife.<br></br>
                Mysore, Karnataka
              </p>
              <div
                className="delete_button"
                onClick={() => console.log("on Click delete---")}>
                <img src={vector} alt="vector"/>
              </div>
            </div>
          );
        })}
        <div
          className="download"
          onClick={() => console.log("on Click close button---")}>
          <span className="dload">Download Real Personas</span>
        </div>
      </div>
    </div>
  );
};

export default Grid;
