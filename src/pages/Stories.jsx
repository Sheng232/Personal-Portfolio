import { useParams, Link, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function Stories(){
    const params = useParams().UserName;
    const storyStorage = JSON.parse(localStorage.getItem("stories"));
    const [story, setStory] = useState(
        storyStorage.find(story=> params === story.user) || ""
    );
    const navigate = useNavigate();
    
    useEffect(
        ()=>{
            const newStory = setTimeout(
            ()=>{
                const currentIndex = storyStorage.findIndex(element => element.src === story.src);
                if(currentIndex + 1 < storyStorage.length){
                    setStory(storyStorage[currentIndex + 1])
                }
                else{
                    navigate("/");
                }
                return () => clearTimeout(newStory);
            }
        , 5000)}
            
    , [story])

    return(
        <>
            <div className="progress-bars">
                <div className="progress-bar">
                </div>
                <hr className="inner-progress-bar"/>
            </div>
            <figure className="user">
                <img src={story.src} alt="" className="story-user" />
                <figcaption>
                    <strong className="transparent">{story.user}</strong>
                </figcaption>
            </figure>
            <Link to="/"><FontAwesomeIcon icon ={faX} className="absolute home-page-button"/></Link>
            <img src={story.story} alt={story.user} className="story" />
            <button className="prev-story-button flex-center">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className="next-story-button flex-center">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <h3 className="absolute">{story.description}</h3>
        </>
    )
}