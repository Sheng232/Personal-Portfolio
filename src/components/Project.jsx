import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faGit, faGithub, faFigma} from '@fortawesome/free-brands-svg-icons'
import { faJs, faHtml5, faCss, faJava } from "@fortawesome/free-brands-svg-icons"


export default function Project(props){
    const {title, description, tech, demoUrl, github, id} = props

    const displayTechnology = tech.map(element=>{
        return(
            <>
                <div>
                    {element === "HTML" ? <FontAwesomeIcon icon={faHtml5} /> :
                    element === "CSS" ? <FontAwesomeIcon icon={faCss} /> :
                    element === "JavaScript" ? <FontAwesomeIcon icon={faJs} /> :
                    element === "React" ? <FontAwesomeIcon icon={faReact} /> : 
                    element === "Java" ? <FontAwesomeIcon icon={faJava} />
                    :""
                    } {element}
                </div>
            </>
        )
    })

    return(
        id%2 === 0 ?
        <div>
            <section className="flex-center relative" >
                <div className="flex-evenly2">
                    <div className="project-info">
                        <h2 className="project-title">{title}</h2>
                        <p className="project-description">{description}</p>
                        <div className="technology-used">{displayTechnology}</div>
                        <a target="_blank" className="github-button flex-center" href={github}><FontAwesomeIcon icon={faGithub} />Github Repo</a>
                    </div>
                    <div className="project-demo flex-center">
                        <img className="project-image" src={demoUrl} />
                        <div className="dot"></div>
                        <div className="triangle"></div>
                    </div>
                    
                </div>

            </section>
        </div> : 
            <div>
            <section className="flex-center relative" >
                <div className="flex-evenly">
                <div className="project-demo flex-center">
                        <img className="project-image" src={demoUrl} />
                        <div className="dot"></div>
                        <div className="triangle2"></div>
                    </div>
                    <div className="project-info2">
                        <h2 className="project-title">{title}</h2>
                        <p className="project-description">{description}</p>
                        <div className="technology-used">{displayTechnology}</div>
                        <a target="_blank" className="github-button flex-center" href={github}><FontAwesomeIcon icon={faGithub} />Github Repo</a>
                    </div>
                </div>

            </section>
        </div>

    )

}