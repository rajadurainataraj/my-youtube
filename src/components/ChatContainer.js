import Chat from "./Chat"
import { useEffect, useState } from "react"
import { randomString } from "../utils/helper"
import { useDispatch, useSelector } from "react-redux"
import { message } from "../utils/chatSlice"

const ChatContainer = () => {
    const dispatch = useDispatch()
    const [inputData, setInputData] = useState('')
    const [hide, setHide] = useState(false)

    const getRandomString = useSelector(store => store.chat.liveChat)

    useEffect(() => {

        let i = setInterval(() => {
            dispatch(message(randomString(8)))
        }, 3000)

        return () => {
            clearInterval(i)
        }
    }, [])

    function sendInput() {
        dispatch(message(inputData))
        setInputData('')
    }
    const hideChat = () => {
        if (hide) {
            setHide(false)
        } else {
            setHide(true)
        }
    }

    return (
        <div>
            {getRandomString.map((message, i) => <div key={i}><Chat message={message} /></div>)}
            <div className="pl-2">
                <input placeholder="entertext"
                    onChange={(e) => setInputData(e.target.value)}
                    value={inputData}
                    className="pl-2 border border-gray-500 rounded-md" />
                <button
                    className="border border-gray-500 rounded-md px-4 ml-2"
                    onClick={() => sendInput()}
                >sent</button>
            </div>
            {/* <div className="flex text-center border border-gray-400 justify-center p-1 rounded-md m-2">
                <button onClick={()=>hideChat()}>hideChat</button>
            </div> */}

        </div>

    )
}
export default ChatContainer