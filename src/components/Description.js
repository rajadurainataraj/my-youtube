import { useState } from "react"

const Discripion = ({ snippet, statistics }) => {
    const { channelTitle, description, localized, publishedAt } = snippet
    const { title } = localized
    const { commentCount, favoriteCount, likeCount, viewCount } = statistics
    const [showLess, setShowLess] = useState(true)
   
    return (
        <div className="flex flex-col pl-10">
            <div className="font-semibold mt-3">{title}</div>

            <div className="flex justify-between mt-4">
                <div className="flex text-center justify-center align-middle">
                    <div className="mx-2 pt-1">{channelTitle}</div>
                    <div className="px-4 py-1.5 bg-black text-white rounded-full">Subscribe</div>
                </div>
                <div className="flex justify-center align-middle">
                    <div className="mx-2 px-4 py-1.5 bg-gray-300 rounded-full">👍 {likeCount} | 👎🏾 </div>
                    <div className="mx-2 px-3 py-1.5 rounded-full  bg-gray-300 ">Share</div>
                    <div className="mx-2 flex justify-center align-middle w-10 text-center rounded-full  bg-gray-300">...</div>
                </div>
            </div>
            <div className="my-6 p-2 rounded-lg bg-slate-100">
                {!showLess ? description : description.substring(0, 250)}
                <button onClick={() => setShowLess(!showLess)}
                    className="font-bold px-2 py-0.5">
                    {showLess ? "Show more" : "Show less"}
                </button>
            </div>

            {commentCount} Comments
        </div>
    )
}
export default Discripion