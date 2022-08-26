import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="col-sm-5 copyright">
            <p>Tel : +669 8283 0263</p>
            <p>Email : sarun.ngamp@gmail.com</p>
          </div>
          <div className="col-sm-2 top">
            <Link to="root" spy={true} smooth={true}>
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </Link>
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a
                  aria-label="github"
                  draggable="false"
                  href="https://github.com/armaarm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  aria-label="linkedin"
                  draggable="false"
                  href="https://www.linkedin.com/in/sarun-n-11b816136/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  aria-label="gmail"
                  draggable="false"
                  href="mailto:sarun.ngamp@gmail.com?Subject=Hello Sarun, I'd Love to Connect!"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMailBulk} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer;