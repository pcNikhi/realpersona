import "./Frame.css";
import parvathamma from '../assests/parvathamma.svg'
import photo2 from '../assests/photo2.svg'
import photo3 from '../assests/photo3.svg';
import Line from '../assests/Line.svg'

const Frame = () => {
  return (
    <div>
      <div className="row">
      <div className="bottem-line1">
        {/* <img src={Line} alt="line"></img> */}
      </div>
        <div className="col-4">
          <div className="cardContainer1">
            <div className="image1">
              <img src={parvathamma} alt="parvathamma" />
            </div>
            <div className="personDetail">
              <div className="row">
                <h4 className="Name1">Parvatamma Gowda</h4>
              </div>
              <div className="row">
                <p className="p1">58 Years, Housewife, Mysore, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="col-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default Frame;