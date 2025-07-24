import classNames from "classnames"
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { IoIosWarning, IoIosCloseCircle } from "react-icons/io";
import "./Banner.css"
import "../../index.css"

const iconMap = {
    success: FaCheckCircle,
    warning: IoIosWarning,
    error: IoIosCloseCircle,
    neutral: FaInfoCircle,
}

export default function Banner({ type, title, className, style, children }) {
    const badgeTypeClassName = type || "success"
    const bannerClassName = classNames("banner", badgeTypeClassName, className)
    const role = type === "error" || type === "warning" ? "alert" : "status"

    const bannerTitle = title || "Banner Title"
    const Icon = iconMap[type] || FaCheckCircle

    return (
        <div className={bannerClassName} role={role} style={style}>
            <Icon className="icon" />
            <div className="banner-title">{bannerTitle}</div>
            {children && <div className="banner-desc">{children}</div>}
        </div>
    )
}

