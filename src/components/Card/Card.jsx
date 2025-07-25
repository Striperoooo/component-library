import classNames from "classnames"
import { IoCloudUploadOutline } from "react-icons/io5";
import "./Card.css"
import "../../index.css"
import React from "react"

export default function Card() {
    return (
        <div className="card-container">
            <div className="icon">
                <IoCloudUploadOutline />
            </div>
            <div className="title">Easy Deployment</div>
            <div className="content">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</div>
        </div>
    )
}

