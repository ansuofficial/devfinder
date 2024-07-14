import React from "react"

const UserMeta = ({ icon, text, link = null, className = "space-x-4" }) => {
  return (
    <div
      className={`flex items-center truncate ${className} ${
        !text ? "opacity-50" : ""
      }`}
    >
      <span>{icon}</span>
      <span>
        {link ? (
          <a href={link} className="hover:underline">
            {text}
          </a>
        ) : text ? (
          text
        ) : (
          "Not Available"
        )}
      </span>
    </div>
  )
}

export default UserMeta
