import React from "react"

const UserStat = ({ label, number }) => {
  return (
    <div>
      <span className="block text-sm">{label}</span>
      <span className="block text-2xl font-semibold">{number}</span>
    </div>
  )
}

export default UserStat
