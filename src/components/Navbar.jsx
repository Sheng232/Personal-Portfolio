export default function Navbar(){
    return(
        <>
            <nav>
                <a className="logo flex-center" href="#empty-nav">Sheng.Jian()</a>
                <div>
                    <a className="about" href="#skills">About</a>
                    <a className="my-work" href="#projects">My work</a>
                    <a className="contact" href="#contact">Contact</a>
                </div>
                
            </nav>
            <div className="empty-nav" id="empty-nav"></div>
        </>
    )
}