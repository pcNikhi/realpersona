import "./Table.css";
import background from "../../assets/background.svg";
// import CardAndTable from "../CardAndTable/CardAndTable";
const Table = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="table-container">
      <div className="table-shadow">
        <table className="table1 col-md-12">
          <tr>
            <td className="col-md-3 rowcol">
              Age
              <select className="dropdown col-md-12">
                <option value={18 - 30}>18-30 years</option>
                <option value={30 - 45}>
                  30-45 years <input type="radio" />
                </option>
                <option value={45 - 60}>45-60 years</option>
                <option value={60 - 80}>60-80 years</option>
              </select>
            </td>
            <td className="col-md-3 rowcol">
              Gender
              <select className="dropdown col-md-12">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </td>
            <td className="col-md-3 rowcol">
              Location
              <select className="dropdown col-md-12">
                <option>Karnataka</option>
                <option>Maharatra</option>
                <option>Goa</option>
              </select>
            </td>
            <td className="col-md-3 rowcol">
              Occupation
              <select className="dropdown col-md-12">
                <option>Farmer</option>
                <option>Teacher</option>
                <option>Farmer</option>
              </select>
            </td>
          </tr>
        </table>
      </div>

      <div className="col-md-8 background">
        <img
          src={background}
          alt="background"
          className=" col-md-9 card-bg-img"
        />
        <p className="col-md-2" style={{ paddingLeft: "0.5rem" }}>
          <button type="button" onClick={refreshPage}>
            clear filters
          </button>
        </p>
      </div>
    </div>
  );
};
export default Table;