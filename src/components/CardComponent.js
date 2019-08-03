import React from "react"
import "./CardComponent.scss"
export const CardComponent = ({ children, className }) => {
  return (
    <>
      <div className={` card card-style ${className ? `${ className }` : ''} `}>
        <div className="card-body">{children}</div>
      </div>
    </>
  )
}
