import HeroImg from "../assets/Hero-image.png"
import ChessClubLogo from "../assets/Chess_Club_Logo.png"
import { useState, useEffect, useRef} from "react"
import LFRLogo from "../assets/LFR-logo.jpg"
import LFRImg from "../assets/LFR-image.jpg"
import ChessClubImg from "../assets/Chess-Club-img.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faHeartCrack, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import PostImage from "../assets/PostImage.png"
export default function InstaHome (){
    const stories = [
        {
            src: ChessClubLogo,
            user: 'lowellhschessclub',
            story: "https://picsum.photos/200/300",
            description: "",
        },
        {
            src: ChessClubImg,
            user: 'lowellfoodrescue',
            story: "https://picsum.photos/200/300",
            description: "",
        },
    ];

    const [storiesState, setStoriesState] = useState(JSON.parse(localStorage.getItem("stories")) || stories);
    const [isLiked, setIsLiked] = useState(true);
    const [popup, setPopup] = useState(0);
    const [imageFile, setImageFile] = useState(null);
    const [description, setDescription] = useState("");

    function uploadFile(event){
        const newFile = event.target.files[0];
        if(newFile){
            const reader = new FileReader();
            reader.onload = (e) =>{
                setImageFile(e.target.result);
                setPopup(2);
            }
            reader.readAsDataURL(newFile);
        }

    }
    function shareStory(){
        setStoriesState(prevState =>
                    [
                        {
                            src: HeroImg,
                            user: 'Your story',
                            story: imageFile,
                            description: description,
                        },
                        ...prevState,
                    ]
                )
        setPopup(0);

    }
    useEffect(()=>{
        localStorage.setItem("stories", JSON.stringify(storiesState));
    }, [stories, storiesState])


    
    const displayStories = storiesState.map((story, index)=>{
        return(
            <figure key={index}>
                <Link to={`Stories/${story.user}`}><img src={story.src} alt={story.user} className="insta-profile-pic"/></Link>
                <figcaption className="small-font">{
                    story.user.length > 10? `${story.user.substring(0, 10)}...` : story.user}
                </figcaption>
            </figure>
        )
    })
    function showPopover(){
        setPopup(1);
    }
    function hidePopover(){
        setPopup(0);
    }
    const posts = [
        {
            name: 'lowellfoodrescue',
            imageUrl: `${LFRImg}`,
            logo: `${LFRLogo}`,
            description: 'Here a quick look at our recent donation! Hope every had a resful Thanksgiving! Thanks to our awesome team: @p_r_3_5_t_0_n , @luis.palacios__ , @ilya_shuster1 , @g._.lin , @daena_lim , @sheng45334 , @gold_fish_mem0ry , @lennyyhan , @_cody007 , @jtinola , @gabrielaeortega , and @derk.sit . Lastly, thank you so much to @extrafooddotorg for their help! This wouldn’t be possible without them 🙂',
        },
        {
            name: 'lowellchessclub',
            logo: `${ChessClubLogo}`,
            imageUrl: `${ChessClubImg}`,
            description: "Thank you to everybody who was able to make it to today's tournament! We will be continuing rounds 3 and 4...",
        }
    ];
    const displayPosts = posts.map((post, index)=>{
        return(
            <div className="post" key={index}>
                <div className="post-name"><img className="post-logo" src={post.logo}/>{post.name}</div>
                <img src={post.imageUrl} className="post-img"/>
                <div className="post-buttons">
                    <FontAwesomeIcon icon = {isLiked ? faHeart : faHeartCrack} className="heart" onClick={toggleLike} />
                </div>
                <div className="post-description"><strong>{post.name} </strong> {post.description}</div>
            </div>
        )
    }

    )
    function toggleLike(){
        setIsLiked(prevState=>!prevState);
    }

    return(
        <>
            <div className="insta-home-stories">
                <button
                    className="new-story-button flex-center" onClick={showPopover}>
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                </button>


                <div className="popover" 
                    style={{display: popup === 1 ? "block" : "none"}}
                >
                    <h4>
                        Create new post
                        <FontAwesomeIcon icon={faMinus} className="minus-icon" 
                            onClick = {hidePopover}
                        />
                    </h4>
                    <div className="upload-container">
                        <img src={PostImage} alt="" className="post-image"/>
                        <h3>Drag photos and videos here</h3>
                        <div className="file-input-container">
                            <label htmlFor="file-upload" className="custom-file-upload">
                                Select from computer
                            </label>
                            <input type="file" id="file-upload" name="input-story" 
                                onChange={uploadFile}
                            />
                        </div>
                    </div>
                </div>
                <div className="popover" 
                    style={{display: popup === 2 ? "block" : "none"}}
                >
                    <h4>
                        Create new post
                        <FontAwesomeIcon icon={faMinus} className="minus-icon" 
                            onClick = {hidePopover}
                        />
                    </h4>
                    <img src={imageFile} alt="" className="story-image" />
                    <figure className="user">
                        <img src={HeroImg} alt="" className="story-user" />
                        <figcaption>
                            <strong>sheng45334</strong>
                        </figcaption>
                    </figure>
                    <textarea className="story-description" maxLength="200"
                        onChange={(event)=>{
                            setDescription(event.target.value)
                        }}
                    >
                    </textarea>
                    <p className="description-length">{description.length}/200</p>
                    <button className="post-story-button"
                        onClick={shareStory}
                    >
                        Share
                    </button>
                </div>
                        

                {displayStories}
            </div>
            <div className="posts">
                {displayPosts}
            </div>
        </>
    )
}