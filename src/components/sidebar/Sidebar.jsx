import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import "./links/Links"
import Links from "./links/Links"
import { useState } from "react"


const Sidebar = () => {
    const [open,setOpen] = useState(false)

    const variants = {
        open:
        closed:
    }
    return (
        <div className="sidebar">
            <div className="background">
                <Links />
            </div>
            <div>
                <ToggleButton  setOpen={setOpen}/>
            </div>
        </div>
    )
}

export default Sidebar
