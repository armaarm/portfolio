import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faA, faClipboard, } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNodeJs, faJava, faJsSquare, faHtml5, faCss3, faReact, faPhp, faBootstrap, faFigma } from "@fortawesome/free-brands-svg-icons";

function Skills() {
    return ( 
        <div id="skills">
            <h2 className="heading"><FontAwesomeIcon icon={faClipboard} /> Skills</h2>
            <ul>
                <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                <li><FontAwesomeIcon icon={faCss3} />  CSS</li>
                <li><FontAwesomeIcon icon={faJsSquare} />  JavaScript</li> 
                <li><FontAwesomeIcon icon={faPhp} /> PHP</li>   
                <li><FontAwesomeIcon icon={faJava} /> Java</li>
                <li><FontAwesomeIcon icon={faCoffee} /> C</li> 
                <li><FontAwesomeIcon icon={faReact} /> React JS</li>
                <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>  
                <li><FontAwesomeIcon icon={faNodeJs} /> Node JS</li> 
                <li><FontAwesomeIcon icon={faGithub} /> Git/GitHub</li> 
                <li><FontAwesomeIcon icon={faA} /> Adobe Photoshop</li>
                <li><FontAwesomeIcon icon={faFigma} /> Figma</li>
            </ul>
        </div> 
    )
}

export default Skills;