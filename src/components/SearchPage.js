import React from 'react'
import { Link } from 'react-router-dom'

const SearchPage = ({ snippet,id }) => {

    const { channelTitle, description, thumbnails, title } = snippet
    const { medium } = thumbnails
    return (
        <div className='flex my-5'>
             <Link to={"/watch?v="+id.videoId}>
                <img alt="images" className="rounded-md" src={medium.url} />
                </Link>
            <div className='flex flex-col pl-4'>
                <h1 className='font-semibold'>{title}</h1>
                <div className='flex pt-2'> {channelTitle}</div>
                <div className='pt-2'>{description}</div>
            </div>

        </div>
    )
}

export default SearchPage