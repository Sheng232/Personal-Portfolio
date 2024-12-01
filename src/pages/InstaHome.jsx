import HeroImg from "../assets/Hero-image.png"
import ChessClubLogo from "../assets/Chess_Club_Logo.png"
import { useState } from "react"
import LFRLogo from "../assets/LFR-logo.jpg"
import LFRImg from "../assets/LFR-image.jpg"
import ChessClubImg from "../assets/Chess-Club-img.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faHeartCrack } from "@fortawesome/free-solid-svg-icons"

export default function InstaHome (){
    const [isLiked, setIsLiked] = useState(true);

    function toggleLike(){
        setIsLiked(prevState=>!prevState);
    }
    const posts = [
        {
            name: 'lowellfoodrescue',
            imageUrl: `${LFRImg}`,
            logo: `${LFRLogo}`,
            description: 'Here a quick look at our recent donation! Hope every had a resful Thanksgiving! Thanks to our awesome team: @p_r_3_5_t_0_n , @luis.palacios__ , @ilya_shuster1 , @g._.lin , @daena_lim , @sheng45334 , @gold_fish_mem0ry , @lennyyhan , @_cody007 , @jtinola , @gabrielaeortega , and @derk.sit . Lastly, thank you so much to @extrafooddotorg for their help! This wouldn’t be possible without them 🙂',
            id : 1,
        },
        {
            name: 'lowellchessclub',
            logo: `${ChessClubLogo}`,
            imageUrl: `${ChessClubImg}`,
            description: "Thank you to everybody who was able to make it to today's tournament! We will be continuing rounds 3 and 4...",
            id : 2,
        }
    ];
    const displayPosts = posts.map(post=>{
        return(
            <div className="post" key={post.id}>
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
    return(
        <>
            <div className="insta-home-stories">
                <figure>
                    <img src={HeroImg} alt="profile-pic" className="insta-profile-pic"/>
                    <figcaption>Your story</figcaption>
                </figure>
                <figure>
                    <img src={ChessClubLogo} alt="chess Club logo" className="insta-profile-pic" />
                    <figcaption>lowellhsches...</figcaption>
                </figure>
                <figure>
                    <img src={LFRLogo} alt="LFR-logo" className="insta-profile-pic" />
                    <figcaption>lowellfoodre...</figcaption>
                </figure>

            </div>
            <div className="posts">
                {displayPosts}
            </div>
        </>
    )
}