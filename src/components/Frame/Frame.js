import "./Frame.css";
import parvathamma from "./assets/parvathamma.svg";
import photo2 from "./assets/photo2.svg";
import photo3 from "./assets/photo3.svg";

const Frame = () => {
  return (
    <div>
      <div class="row">
        <div class="col-4">
          <div class="cardContainer1">
            <div className="image1">
              <img src={parvathamma} alt="parvathamma" />
            </div>
            <div className="personDetail">
              <div class="row">
                <h4 className="Name1">Parvatamma Gowda</h4>
              </div>
              <div class="row">
                <p className="p1">58 Years, Housewife, Mysore, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div className="cardContainer2">
            <img src={photo2} alt="photo2" />
          </div>
          <div className="text-block2">
            <h4 className="Name2">Preetham Jain</h4>
            <p className="p2">58 Years, Student, Mysore, Karnataka</p>
          </div>
        </div>
        <div class="col-4">
          <div className="cardContainer3">
            <img src={photo3} alt="photo3" />
          </div>
          <div className="text-block3">
            <h4 className="Name3">Sweta Pandit</h4>
            <p className="p3">30 Years, Female, Mysore, Karnataka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;

// personArray = [{
//   name: "Sweta Pandit",
//   age: "30",
//   gender: "Female",
//   address: "Mysore, Karnataka",
//   imagePath: photo3
// }]
