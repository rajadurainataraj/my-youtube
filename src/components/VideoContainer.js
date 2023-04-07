import { GET_VIDEOS } from "./const"
import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
const VideoContainer = () => {
    const [getData, setGetData] = useState()
    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(GET_VIDEOS)
        const result = await data.json()
        setGetData(result.items)
    }
    return (
        <>
        <div className="flex flex-wrap m-2">

            {getData?.map((item,i) => {

                return (
                    <div className="m-2" key={item.id}>
                        <Link  to={"/watch?v="+item.id}>
                            <VideoCard {...item} />
                        </Link>
                    </div>
                )
            })}
            </div>
        
            </>

    )
}
export default VideoContainer