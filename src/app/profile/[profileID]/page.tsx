import React from "react"

const ProfileID = ({ params }: { params: { profileID: string } }) => {
  return (
    <section style={{ color: "#fff" }}>
      <div className="container">{params.profileID}</div>
    </section>
  )
}

export default ProfileID
