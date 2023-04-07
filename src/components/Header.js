import { HAMBURGER_ICON, USER_ICON, YOU_ICON } from "./const"
import { useDispatch, useSelector } from "react-redux"
// import { useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"
import { SEARCH_API } from "./const"
import { cacheStore } from "../utils/searchSlice"
import { Link, useNavigate} from "react-router-dom"

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState('')
    const [getSearch, setGetSearch] = useState([])
    const [suggession, setSuggession] = useState(false)
    // const Selector = useSelector(store => store.app.toggleMenuOpen)
    // console.log(Selector)
    const toggleMenuFun = () => {
        dispatch(toggleMenu())
    }
    const selector = useSelector(store => store.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (selector[searchInput]) {
                setGetSearch(selector[searchInput])
            } else {
                getSearchData()
            }

        }, 200)
        return () => {
            clearInterval(timer)
        }
    }, [searchInput])

    const getSearchData = async (e) => {
        const fetchData = await fetch(SEARCH_API + searchInput)
        const result = await fetchData.json()
        // console.log(result[1])
        setGetSearch(result[1])
        dispatch(cacheStore({ [searchInput]: result[1] }))
    }
    const searchListFunction = (search) => {
        // setSingleSearch(i.target.innerHTML)
        setSearchInput(search)
        setSuggession(false)
    }
    const getSearchResults = () => {
        navigate("/searchList?q=" + searchInput)
        setSuggession(false)
    }

    return (
        <div className="flex justify-between p-5 m-2 max-w-full sticky top-0 bg-white">
            <div className="flex">
                <img onClick={() => toggleMenuFun()} className="h-7 pr-4 cursor-pointer" src={HAMBURGER_ICON} alt="hamburger Icon" />
                <img className="h-7" src={YOU_ICON} alt="youtube Icon" />
            </div>
            <div>
                <div className="flex">
                    <input type="text" className="pl-2 border border-gray-400 rounded-l-full py-1 w-96"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        // onBlur={() => setSuggession(true)}
                        onFocus={() => setSuggession(true)}
                    />
                    <button className="pl-2 border border-gray-400 rounded-r-full py-1 px-2" onClick={()=>getSearchResults()}>🔍</button>
                </div>

                {
                    suggession && searchInput.length >=1 && <div className="p-2 rounded-lg shadow-lg border border-gray-300 fixed bg-white w-96">
                        {
                            getSearch.map((search, i) => {
                                return (
                                    <Link key={i} to={"/searchList?q=" + search}>
                                        <div className="mt-2 cursor-pointer"
                                            onClick={() => searchListFunction(search)} >
                                            {search}
                                        </div>
                                   </Link>
                                )
                            })
                        }
                    </div>
                }
            </div>

            <div>
                <img className="h-9" src={USER_ICON} alt="user Icon" />
            </div>

        </div>
    )
}
export default Header