import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentContainer from "./CommentContainer"
import ChatContainer from "./ChatContainer"
import { useState } from "react"
import RelatedVideoContainer from "./RelatedVideoContainer"
// import DiscripionContainer from "./DiscriptionContainer"
import { LIST_BY_KEYWORD } from "./const"
import Discripion from "./Description"
const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [showLive, setShowLive] = useState(false)
    const dispatch = useDispatch();
    const [storeData, setStoreData] = useState([])
    const [liveShow, setLiveShow] = useState('')

    useEffect(() => {
        dispatch(closeMenu())
        getApiData()
    }, [searchParams.get("v"),liveShow])

 
    const getApiData = async () => {
        const data = await fetch(LIST_BY_KEYWORD + searchParams.get("v"))
        const result = await data.json()
        console.log(result)
        setLiveShow(storeData[0]?.snippet?.liveBroadcastContent)
        setStoreData(result.items)
    }
   
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-between">
                <div className="pl-3 w-[100%]" >
                    <iframe className="pl-11" width="900"
                        height="500"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=0"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                    {/* <DiscripionContainer/> */}
                    {storeData.length >= 1 && <Discripion {...storeData[0]} />}

                    <CommentContainer />
                </div>

                {storeData.length >= 1 && liveShow === "none" ?
                    <div className="border  border-gray-300 ml-2 w-full rounded-lg overflow-y-scroll flex flex-col-reverse">
                        <RelatedVideoContainer />
                    </div> :
                    <div className={!showLive ? "h-4 flex  w-[90%] text-center justify-center" :
                        "border border-gray-300 h-[500px] ml-2 w-full rounded-lg overflow-y-scroll flex flex-col-reverse"}>
                        <button className="border border-gray-500 w-[90%] mx-auto h-8 rounded-md mt-2"
                            onClick={() => setShowLive(!showLive)}>{showLive ? "Hide Chat" : "Show Chat"}
                        </button>
                        
                        {showLive && <ChatContainer />}
                    </div>}


            </div>


        </div>


    )
}
export default WatchPage