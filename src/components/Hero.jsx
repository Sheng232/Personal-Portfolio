import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownLong } from "@fortawesome/free-solid-svg-icons"
import HeroImage from "../assets/Hero-image.png";
import { GlowCapture , Glow} from "@codaworks/react-glow";

export default function Hero(){
    return(
        <GlowCapture>
            <Glow color="#227fd6">
                <div className="hero-container">
                    <div className="hero">
                        <div className="hero-description" >
                            <h1>Hello, I'm Sheng Jian</h1>
                            <div className="glowable-text">I am a <strong> 
                                <ul className="dynamic-texts"> 
                                    <li>Front-end Developer </li>
                                    <li>UI Designer</li>
                                    <li>Lowell HS Student</li>
                                    <li>Chess Player</li>
                                </ul>
                            </strong> 
                            based in San Francisco, California. I enjoy spending my days building
                            <br /> interactive softwares through the powers of front-end technology. If 
                            <br />you are looking for a collaborator, feel free to reach out.
                            </div>
                        </div>
                        <figure>
                            <img className="flex-center hero-image" src={HeroImage}/>
                            <div className="hero-image-back"></div>
                        </figure>
                    </div>
                    <div className="hero-button flex-center">
                        <a className="work-button flex-center" href="#projects">My work</a>
                        <FontAwesomeIcon icon={faDownLong} beat className="down-arrow"/>
                    </div>
                </div>
            </Glow>
        </GlowCapture>
    )
}