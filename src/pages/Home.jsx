import {useState} from "react"

import Badge from "../components/Badge"
import Banner from "../components/Banner"
import Tooltip from "../components/Tooltip"
import PopupEl from "../components/PopupEl"


export default function Home(){
    const [isPopup, setIsPopup] = useState({top : false, bottom : false, center : false})

    const handlePopup = v => (
        setIsPopup(p => ({...p, [v] : !p[v]}))
    )
    return(
        <section>
            <h2>Components test:</h2>
            <section>
                <h3>Badge:</h3>
            </section>
            <section>
                <h3>Banner:</h3>
            </section>
            <section>
                <h3>Popup:</h3>
                <button onClick={() => handlePopup("top")}>Activate top popup</button>
                <button onClick={() => handlePopup("bottom")}>Activate bottom popup</button>
                <button onClick={() => handlePopup("center")}>Activate center popup</button>
                {
                    isPopup.top &&
                    <PopupEl variant="success" title="test" position="absolute top-0">
                      This is a test popup
                    </PopupEl>
                }
                {
                     isPopup.bottom &&
                    <PopupEl variant="warning" title="test" position="absolute bottom-0">
                      This is a test popup
                    </PopupEl>
                }
                {
                     isPopup.center &&
                    <PopupEl  title="test" position="fixed inset-40 bg-black/50">
                      This is a test popup
                    </PopupEl>
                }
            </section>
            <section>
                <h3>Tooltip:</h3>
            </section>
        </section>
    )
}