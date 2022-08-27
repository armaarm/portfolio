import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import activecon from "../images/activecon.png"
import atcpower from "../images/atcpower.png";
import enerserve from "../images/enerserve.png";

function Projects() {
    return (
      <div className="background-alt" id="projects">
        <h2 className="heading">
          <FontAwesomeIcon icon={faCode} /> Projects
        </h2>
        <div className="container">
          <div className="row">
            <div className="shadow-large project">
              <div className="project-image">
                <img
                  alt="san jose state university campus"
                  draggable="false"
                  src={activecon}
                  width="300"
                  height="50%"
                />
              </div>
              <div className="project-info">
                <h3>ActiveCon's company website</h3>
                <p>
                  The website that using html and css to show company details
                  contain with company's service , project , contact
                </p>
                <FontAwesomeIcon icon={faGithub} />
                <a
                  aria-label="github"
                  draggable="false"
                  href="https://github.com/armaarm/ActiveCon101.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </a>
                | <FontAwesomeIcon icon={faDesktop} />
                <a
                  aria-label="website"
                  draggable="false"
                  href="https://activecon.co.th"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project Site
                </a>
              </div>
            </div>
            <div className="shadow-large project">
              <div className="project-image">
                <img
                  alt="digedogesj crypto pool"
                  draggable="false"
                  src={atcpower}
                  width="300"
                  height="50%"
                />
              </div>
              <div className="project-info">
                <h3>ATCPOWER's company website</h3>
                <p>
                  The singlepage website that using html and css to show company
                  details contain with company's service , project , contact
                </p>
                <FontAwesomeIcon icon={faGithub} />
                <a
                  aria-label="github"
                  draggable="false"
                  href="https://github.com/armaarm/atcpower.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </a>
                | <FontAwesomeIcon icon={faDesktop} />
                <a
                  aria-label="website"
                  draggable="false"
                  href="https://atcpower.co.th"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project Site
                </a>
              </div>
            </div>
            <div className="shadow-large project">
              <div className="project-image">
                <img
                  alt="gratition"
                  draggable="false"
                  src={enerserve}
                  width="300"
                  height="50%"
                />
              </div>
              <div className="project-info">
                <h3>ENERSERVESOLUTIONS's company website</h3>
                <p>
                  The singlepage website that using html and css to show company
                  details contain with company's service , project , contact
                </p>
                <FontAwesomeIcon icon={faGithub} />
                <a
                  aria-label="github"
                  draggable="false"
                  href="https://github.com/armaarm/ENS2.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </a>
                | <FontAwesomeIcon icon={faDesktop} />
                <a
                  aria-label="website"
                  draggable="false"
                  href="https://enerservesolutions.co.th"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  View Project Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Projects;