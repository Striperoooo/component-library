import classNames from "classnames"
import "./Badge.css"
import "../../index.css"
import React from "react"

export default function Badge({ badgeColor, shape, className, style, children }) {

    const badgeColorClassName = badgeColor ? badgeColor : "grey"
    const shapeClassName = shape ? shape : "square"
    const badgeClassName = classNames("badge", shapeClassName, badgeColorClassName, className)

    return <span className={badgeClassName} style={style}>
        {children !== undefined && children !== null
            ? children
            : "Badge"}
    </span>
}

