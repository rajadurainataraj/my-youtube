const HomeCard = ({ title,note,date }) => {
 
    const editIcon = "https://image.shutterstock.com/image-vector/edit-icon-260nw-711835882.jpg"
    return (
        <div className="border border-gray-300 p-3 h-32 rounded-lg shadow-lg m-2">
            <div className="flex justify-between">
                <h1 className="py-0.5 font-bold">{title}</h1>
                <div>
                    <img className="w-6" src={editIcon}  alt="edit" /></div>
            </div>
            <h1 className="py-0.5">{date}</h1>
            <h1 className="py-0.5 font-sans">{note}</h1>
        </div>
    )
}
export default HomeCard