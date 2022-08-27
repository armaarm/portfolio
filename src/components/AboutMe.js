import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h2 className="heading text-center">
                <FontAwesomeIcon icon={faUser} /> About Me
                {/* <img
                  alt="digedogesj crypto pool"
                  draggable="false"
                  src={require("../images/about.jpg")}
                  width="300"
                  height="50%"
                /> */}
              </h2>
            </div>
            <div className="col-md-8 text-center" id="about-desc">
              <img
                className="text-center"
                alt="digedogesj crypto pool"
                draggable="false"
                src={require("../images/about.jpg")}
                width="300"
                height="50%"
              />
              <p className="text-left">
                <br></br>I am a last semester student in bachelor of computer
                science who passionates about programming and testing with an
                experience in webpage design and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    );  
}

export default AboutMe; 