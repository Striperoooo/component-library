import classNames from "classnames"
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { IoIosWarning, IoIosCloseCircle } from "react-icons/io";
import "./Banner.css"
import "../../index.css"
import React from "react"

export default function Banner({ type, title, className, children }) {
    const badgeTypeClassName = type || "success"
    const bannerClassName = classNames("banner", badgeTypeClassName, className)
    const role = type === "error" || type === "warning" ? "alert" : "status"

    const bannerTitle = title || "Banner Title"

    return (
        <div className={bannerClassName} role={role}>
            <FaCheckCircle className="icon" />
            <div className="banner-title">{bannerTitle}</div>
            {children && <div className="banner-desc">{children}</div>}
        </div>
    )
}

