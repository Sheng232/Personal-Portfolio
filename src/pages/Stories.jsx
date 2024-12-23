import { useParams } from "react-router-dom"
import { useState } from "react";

export default function Stories(){
    const params = useParams().UserName;
    const storyStorage = JSON.parse(localStorage.getItem("stories"));
    const [story, setStory] = useState(
        storyStorage.find(story=> params === story.user) || ""
    );

    return(
        <>
            <figure className="user story-profile">
                <img src={story.src} alt="" className="story-user" />
                <figcaption>
                    <strong className="transparent">{story.user}</strong>
                </figcaption>
            </figure>
            <img src={story.story} alt={story.user} className="story" />
            <h3 className="absolute">{story.description}</h3>
        </>
    )
}