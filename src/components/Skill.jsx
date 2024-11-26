import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faGit, faGithub, faFigma} from '@fortawesome/free-brands-svg-icons'
import { faJs, faHtml5, faCss } from "@fortawesome/free-brands-svg-icons"
export default function Skill(){
    return(
        <div className="skills" id="skills">
            <figure className="skill">
                <FontAwesomeIcon icon={faCss} className="skill-icon"/>
                <figcaption>CSS</figcaption>
            </figure>
            <figure className="skill">
                <FontAwesomeIcon icon={faJs} className="skill-icon"/>
                <figcaption>JavaScript</figcaption>
            </figure>
            <figure className="skill">
                <FontAwesomeIcon icon={faHtml5} className="skill-icon"/>
                <figcaption>HTML5</figcaption>
            </figure>
            <figure className="skill">
                <FontAwesomeIcon icon={faReact} className="skill-icon" />
                <figcaption>React</figcaption>
            </figure>
            <figure className="skill">
                <FontAwesomeIcon icon={faGit} className="skill-icon"/>
                <figcaption>Git</figcaption>
            </figure>
            <figure className="skill">
                <FontAwesomeIcon icon={faGithub} className="skill-icon"/>
                <figcaption>Github</figcaption>
            </figure>
            <figure className="skill">
                <FontAwesomeIcon icon={faFigma} className="skill-icon"/>
                <figcaption>Figma</figcaption>
            </figure>
        
        </div>
    )
}