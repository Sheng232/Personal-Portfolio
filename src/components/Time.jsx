import {useState , useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal , faBatteryQuarter} from "@fortawesome/free-solid-svg-icons";
import '../pages/insta.css'
export default function Time(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const currentTime = `${hour > 12 ? hour - 12 : hour} : ${minutes < 10 ? '0'+ minutes : minutes}`
    const [time, setTime] = useState(currentTime);

    useEffect(()=>{
        setTime(currentTime);
    },[date]);

    return(
        <>
            <div className="phone-info flex-between">
                {time}
                <div className="flex-evenly">
                    <FontAwesomeIcon icon={faSignal} />
                    <FontAwesomeIcon icon={faBatteryQuarter} />
                </div>
            </div>
        </>
    )
}