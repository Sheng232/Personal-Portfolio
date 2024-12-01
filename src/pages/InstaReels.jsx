import webDevVideo from "../assets/Tailwind-plugin.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faComment} from "@fortawesome/free-solid-svg-icons"
import Message from "../assets/Messages.png"
export default function InstaReels(){

    return(
        <div className="reels">
            <video  autoPlay loop src={webDevVideo} muted className="video" />
            <div className="video-heart">
                <FontAwesomeIcon icon = {faHeart} className="heart"/>
                <p>1.3M</p>
            </div>
            <div className="comment">
                <FontAwesomeIcon icon={faComment} className="comment-button" />
                <p>200k</p>
            </div>
            <img src={Message} alt="" className="video-message" />
            <p className="video-creator">Web Dev simplified</p>
        </div>

    )
}