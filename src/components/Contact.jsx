import InstaNav from "../components/InstaNav"
import { Outlet } from "react-router-dom"
import Time from "./time"
export default function Contact(){
    return(
        <>
            <div className="instagram-phone-case">
                <Time />
                <Outlet />
                <InstaNav />
            </div>
            <div className="flex-center flex-col contact-page" id="contact">
                <h2 className="contact-title">Get in touch</h2>
                <p>email me at shengj12345@gmail.com</p>
            </div>
        </>
    )
}