import { useState } from "react"

const CreateCard = () => {
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [notes, setNotes] = useState()

    const createAUser = async () => {
        const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                "date": date,
                "note": notes,
                "title": title
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const result = await fetchData.json()

        console.log(result)
        setTitle('')
        setDate('')
        setNotes('')
    }
    return (
        <div className="flex align-middle justify-center w-[100%]">
            <div className="flex flex-col">
                <input className="border rounded-lg border-gray-500 my-2 p-1 px-10 w-80"
                    placeholder="Enter the Title border"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <input className="border rounded-lg border-gray-500 my-2 p-1 px-10 w-80"
                    placeholder="Enter The Date eg:12/03/2023"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <textarea className="border rounded-lg  border-gray-500 my-2 p-1 px-10 w-80"
                    placeholder="Enter Your Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}>
                </textarea>
                <button className="border border-gray-500 rounded-lg py-1 text-blue-400"
                    onClick={() => createAUser()}>Create User
                </button>
            </div>
        </div>
    )
}
export default CreateCard