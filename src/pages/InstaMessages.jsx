import HeroImg from "../assets/Hero-image.png"
import PrestonImg from "../assets/Preston-img.jpg"
import LuisImg from "../assets/Luis-img.jpg"
export default function InstaMessages(){
    return(
        <div>
            <div className="messages-profile padding-1rem">
                <figure className="relative">
                    <div className="note">Note...</div>
                    <img src={HeroImg} alt="" className="sheng-profile"/>
                    <figcaption>Your note</figcaption>
                </figure>
                <figure className="relative">
                    <div className="note">Taste</div>
                    <img src={PrestonImg} alt="" className="preston-profile"/>
                    <figcaption>Preston</figcaption>
                </figure>
            </div>
            <div className="flex-between padding-1rem">
                <h3>Messages</h3>
                <h4>Requests</h4>
            </div>
            <div className="message padding-1rem">
                <img src={LuisImg} alt="" className="luis-profile"/>
                <div>
                    <h5>Luis Palcios</h5>
                    <p>You: On Skibidi ⋅ 4w</p>
                </div>
            </div>

        </div>
    )
}