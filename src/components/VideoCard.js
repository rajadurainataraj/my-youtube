const VideoCard = ({ snippet, statistics, }) => {

    const { title, channelTitle } = snippet
    const { medium } = snippet.thumbnails
    const { viewCount } = statistics
    return (
        <div className="flex flex-wrap">
            <div className="w-48 ">
                <img alt="thumbnails videos" src={medium.url} />
                <div className="pt-1 text-[14.5px]">{title.substring(0, 34)+"..."}</div>
                <div className="pt-0.5 text-[15px] text-gray-500">{channelTitle}</div>
                <div className="text-[15px] text-gray-500">{Number(viewCount)} views</div>
            </div>

        </div>

    )
}
export default VideoCard