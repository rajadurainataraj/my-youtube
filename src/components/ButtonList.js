import Button from "./Button"
import { Link } from "react-router-dom"

const ButtonList = () => {
    return (
        <div className="flex">
            <Link to="createCard">
                <Button name="All" />
                </Link>
            <Button name="Mixes" />
            <Button name="Tamil" />
            <Button name="Music" />
            <Button name="News" />
            <Button name="Live" />
            <Button name="Vijay" />
            <Button name="Crops" />
            <Button name="Thoughts" />
            <Button name="Motivation" />
            <Button name="Computer" />
            <Button name="Javascript" />
            <Button name="Css" />
            <Button name="HTML" />
        </div>
    )
}
export default ButtonList