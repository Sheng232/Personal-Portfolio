import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faGit, faGithub, faFigma} from '@fortawesome/free-brands-svg-icons'
import { faJs, faHtml5, faCss, faJava } from "@fortawesome/free-brands-svg-icons"
import { GlowCapture, Glow } from "@codaworks/react-glow"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Skill from "../components/Skill"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ChessClubImage from "../assets/image3.png"
import FlashcardImage from "../assets/Flashcard-Project-image.png"
import ChessTournamentImage from "../assets/Chess-Tournament-Program-image.jpg"
import PokemonAppImage from "../assets/Pokemon-App-Image.png"


export default function Home(){
    const projects = [
        {
          title: "Chess Club Website",
          description: "An informative website for my school club",
          tech: ["HTML", "CSS", "JavaScript"],
          demoUrl: ChessClubImage,
          github: "https://github.com/Sheng232/Chess-Club-Website",
          id: 1,
        },
        {
          title: "Flashcard App",
          description: "A quizlet-like application to study for your next exam :)",
          tech: ["React", "Vite", "CSS", "JavaScript", "HTML"],
          demoUrl: FlashcardImage,
          github: "https://github.com/Sheng232/Flashcard-project",
          id: 2,
        },
        {
          title: "Chess Tournament App",
          description: "An automated program built with Processing to run chess tournament",
          tech: ["Java"],
          demoUrl: ChessTournamentImage,
          github: "https://github.com/Sheng232/Chess-Tournament-Program",
          id: 3,
        }
      ]
      const displayProjects = projects.map(project=>{
        const {title, description, tech, demoUrl, github, id} = project;
        return(
          <Project 
            title = {title}
            description = {description}
            tech = {tech}
            demoUrl = {demoUrl}
            github = {github}
            id = {id}
            key = {id}
          />
        )
      })
    
      return (
        <>
          <Navbar />
          <Hero />
          <Skill />
          <About />
          <h1 className="flex-center projects-title" id="projects">My Selected Projects</h1>
          {displayProjects}
          <section className="flex-center relative" >
                    <div className="flex-evenly2">
                        <div className="project-info glowable-text">
                            <h2 className="project-title">Pokemon Search App</h2>
                            <p className="project-description">An app built with JavaScript that fetch data through the pokemon Api</p>
                            <div className="technology-used"><div><FontAwesomeIcon icon={faHtml5} /> HTML</div> <div><FontAwesomeIcon icon={faCss} /> CSS</div> <div><FontAwesomeIcon icon={faJs} /> JavaScript</div></div>
                            <a target="_blank" className="github-button flex-center" href="https://github.com/Sheng232/Pokemon-Search-App"><FontAwesomeIcon icon={faGithub} />Github Repo</a>
                        </div>
                            <div className="phone-case relative flex-center">
                              <img className="project-image2" src={PokemonAppImage} />
                              <div className="home-button"></div>
                            </div>
                      </div>
                </section>
          <Contact />
          <Footer />
        </>
      )
}