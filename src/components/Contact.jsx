import InstaNav from "../components/InstaNav"
import { Outlet } from "react-router-dom"
import Time from "../components/Time"
export default function Contact(){
    return(
        <>
            <h2 className="contact-title" id="contact">
                Get in touch <br />
            </h2>
            <h4 className="center">Fake account</h4>
            <div className="instagram-phone-case">
                <Time />
                <Outlet />
                <InstaNav />
            </div>

            {/* <div className="flex-center flex-col contact-page" id="contact">
                <p>email me at shengj12345@gmail.com</p>
            </div> */}
        </>
    )
}