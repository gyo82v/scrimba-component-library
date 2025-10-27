import {useState} from "react"

import Badge from "../components/Badge"
import Banner from "../components/Banner"
import Tooltip from "../components/Tooltip"
import PopupEl from "../components/PopupEl"


export default function Home(){
    const [isPopup, setIsPopup] = useState({top : false, bottom : false, center : false})
    const [isBanner, setIsBanner] = useState({top: false, bottom : false, center : false})

    const handlePopup = v => setIsPopup(p => ({...p, [v] : !p[v]}))
    const handleBanner = v => setIsBanner(b => ({...b, [v] : !b[v]}))
    
    return(
        <section>
            <h2>Components test:</h2>
            <section>
                <h3>Badge:</h3>
            </section>
            <section>
                <h3>Banner:</h3>
                <button onClick={() => handleBanner("top")}>Activate top banner</button>
                <button onClick={() => handleBanner("bottom")}>Activate bottom banner</button>
                <button onClick={() => handleBanner("center")}>Activate central banner</button>
                {
                    isBanner.top && 
                    <Banner variant="success" title="test">
                        This is a test Banner.
                    </Banner>
                }
                 {
                    isBanner.bottom && 
                    <Banner variant="warning" title="test">
                        This is a test Banner.
                    </Banner>
                }
                 {
                    isBanner.center && 
                    <Banner title="test">
                        This is a test Banner.
                    </Banner>
                }
            </section>
            <section>
                <h3>Popup:</h3>
                <button onClick={() => handlePopup("top")}>Activate top popup</button>
                <button onClick={() => handlePopup("bottom")}>Activate bottom popup</button>
                <button onClick={() => handlePopup("center")}>Activate central popup</button>
                {
                    isPopup.top &&
                    <PopupEl variant="success" title="test" position="absolute top-0" setOpen={() => handlePopup("top")}>
                      This is a test popup
                    </PopupEl>
                }
                {
                     isPopup.bottom &&
                    <PopupEl variant="warning" title="test" position="absolute bottom-0" setOpen={() => handlePopup("bottom")}>
                      This is a test popup
                    </PopupEl>
                }
                {
                     isPopup.center &&
                    <PopupEl  title="test" position="fixed inset-40 " setOpen={() => handlePopup("center")}>
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