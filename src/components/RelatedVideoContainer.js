import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { RELATED_VIDEO_API } from "./const"
import RelatedVideo from "./RelatedVideo";

const RelatedVideoContainer = () => {
    const [searchParams] = useSearchParams();
    const [getData,setData] = useState([])
    useEffect(() => {
        RelatedVideos()
    }, [searchParams.get("v")])
    
    const RelatedVideos = async() => {
        const data = await fetch(RELATED_VIDEO_API+searchParams.get("v"))
        const result = await data.json()
        setData(result.items)
    }
    // console.log(getData)
    return (
             getData.length >=1 && getData.map((item,i) => <RelatedVideo key={i} {...item} /> )
    )
}
export default RelatedVideoContainer