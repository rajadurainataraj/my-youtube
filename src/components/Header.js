import { HAMBURGER_ICON, USER_ICON, YOU_ICON } from "./const"
import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"

const Header = () => {
    const dispatch = useDispatch()
// const Selector = useSelector(store => store.app.toggleMenuOpen)
// console.log(Selector)
const toggleMenuFun = () => { 
    dispatch(toggleMenu())
}
    return (
        <div className="flex justify-between p-5 m-2 max-w-full ">
            <div className="flex">

                <img onClick={()=>toggleMenuFun()} className="h-9 pr-4 cursor-pointer" src={HAMBURGER_ICON} alt="hamburger Icon" />
                <img className="h-9" src={YOU_ICON} alt="youtube Icon" />
            </div>
            <div>
                <div className="flex">
                    <input type="text" className="pl-2 border border-gray-400 rounded-l-full py-1 w-96"/>
                    <button className="pl-2 border border-gray-400 rounded-r-full py-1 px-2">🔍</button>
                </div>
            </div>
            <div>
                <img className="h-9" src={USER_ICON} alt="user Icon" />
            </div>

        </div>
    )
}
export default Header