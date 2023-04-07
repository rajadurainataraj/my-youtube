import { useEffect, useState } from "react"
import HomeCard from "./HomeCard"

const Home = () => {
    const [getData, setGetData] = useState()
    useEffect(() => {
        userApi()
    }, [])

    const userApi = async () => {
        const url = "https://userlistapi.onrender.com/fetch"
        const fetchData = await fetch(url)
        const result = await fetchData.json()
        console.log(result)
        setGetData(result)
    }
    // const editData = () => {
           
    // }   
    return (
        getData?.result?.map(item => <div key={item._id}><HomeCard {...item} /></div>)

    )
}
export default Home