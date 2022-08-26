import { Link } from 'react-scroll' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons' 

function HomeScreen() {  
    return ( 
        <div id="lead">
            <div id="lead-content">
                <h1>Sarun Ngampojanavong</h1>
                <h2>Front-end Dev</h2>
            </div>
            <div id="lead-overlay"></div>
            <div id="lead-down"> 
                <Link rel="nofollow" to="about" spy={true} smooth={true}><span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
            </div> 
        </div>
    ) 
}

export default HomeScreen;
