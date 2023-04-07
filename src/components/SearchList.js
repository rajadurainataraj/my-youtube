import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SERACH_RESAPI } from "./const"
import SearchPage from "./SearchPage"

const SearchList = () => {
    const [storeData, setStoreData] = useState([])
    const [searchParams] = useSearchParams()

    useEffect(() => {
        getApiData()
    }, [searchParams.get("q")])

    const getApiData = async () => {
        const data = await fetch(SERACH_RESAPI + searchParams.get("q"))
        
        const result = await data.json()
        console.log(result.items)
        setStoreData(result.items)
    }

    return (
        <div>
            {storeData.length !==0 &&  storeData.map((data,i) => <SearchPage key={i} {...data} />)}
         {/* { storeData.length !==0 &&  <SearchPage {...storeData[0]} />} */}
        </div>
    )
}
export default SearchList