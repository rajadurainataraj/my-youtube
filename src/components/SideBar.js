import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const SideBar = () => {
const isMenuOpen = useSelector(store => store.app.isMenuOpen)

if(!isMenuOpen) return null
    return (
        <div >
            <div className="shadow-lg w-52 p-5 cursor-pointer">
            <ul>
                    <li> 
                    <h1 className="font-bold"><Link to="/">Home</Link></h1>
                    <h1>Shorts</h1>
                    <h1>Subscriptions</h1>
                    <h1 className="font-bold mt-2">Library</h1>
                    <h1>Histry</h1>
                    <h1>Your Videos</h1>
                    <h1>Your Movies</h1>
                    <h1> Watch Later</h1>
                    <h1>Liked Videos</h1>
                    <h1 className="font-bold mt-2">Settings</h1>
                    <h1>Report Histry</h1>
                    <h1>Help</h1>
                    <h1>Sent FeedBack</h1>
                </li>
                </ul>
                </div></div>
    )
}
export default SideBar