import { Link } from "react-router-dom";

const RelatedVideo = ({ snippet, id }) => {
    const { channelTitle, title, thumbnails } = snippet;
    const { medium } = thumbnails

    return (
        <Link to={"/watch?v=" + id.videoId}>
        <div className="mb-4 pl-2 flex">
                <div>
                    <img className="h-24 w-36 rounded-md border border-gray-800" alt="related video" src={medium.url} />
                </div>
           
            <div className="pl-2">
                <div className="text-sm pt-0.5 font-semibold">{title.substring(0, 50)+"..."} </div>
                <div className="text-sm pt-1">{channelTitle} </div>

                </div>    
        </div>
        </Link>
    )
}
export default RelatedVideo