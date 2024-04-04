import React from "react"

const ProfileID = ({ params }: { params: { profileID: string } }) => {
  return <div style={{ color: "#fff" }}>{params.profileID}</div>
}

export default ProfileID
