import HeroImg from "../assets/Hero-image.png"
export default function InstaProfile(){
    return(
        <div className='profile'>
            <div className="profile-info">
                <img src={HeroImg} className="insta-profile-pic"/>
                <div>
                    <h4>sheng45334</h4>
                    <button>Edit profile</button>
                    <button>View archive</button>
                </div>
            </div>
            <div className="profile-description">
                <h3>Sheng Jian</h3>
                <p>LHS 2025<br />Front-end Developer</p>
                <p>email me at shengj12345@gmail.com</p>
            </div>
            <div className="profile-stats flex-evenly">
                <div className="center">0<br />posts</div>
                <div className="center">1.3M<br />followers</div>
                <div className="center">1<br />following</div>
            </div>
            <div className="profile-posts">
                <h4>No posts yet</h4>
            </div>
        </div>
    )
}