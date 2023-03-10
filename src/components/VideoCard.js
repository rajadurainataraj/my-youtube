const VideoCard = ({ data }) => {
    const { title, channelTitle } = data.snippet
    const { medium } = data.snippet.thumbnails
    const {viewCount} = data.statistics
    return (

        <div className="w-48">
            <img alt="thumbnails videos" src={medium.url} />
            <h1>{title}</h1>
            <h1>{channelTitle}</h1>
            <h1>{viewCount}</h1>
        </div>

    )
}
export default VideoCard