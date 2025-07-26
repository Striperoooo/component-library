import classNames from "classnames"
import { IoCloudUploadOutline } from "react-icons/io5";
import "./Card.css"
import "../../index.css"


export default function Card({ icon, iconBackground, title, children, className, style }) {
    const cardIcon = icon || <IoCloudUploadOutline />
    const cardTitle = title || "Card Title"
    const cardContent = children ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis rerum eum quidem."

    const cardContainerClassName = classNames("card-container", className)

    return (
        <div className={cardContainerClassName} style={style}>
            <div className="icon"
                style={{ backgroundColor: iconBackground }}
                aria-hidden="true"
            >
                {cardIcon}
            </div>

            <h2 className="title">{cardTitle}</h2>
            <div className="content">{cardContent}</div>
        </div>
    )
}

