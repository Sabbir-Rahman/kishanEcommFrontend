import React from "react"
import fosholerDoctorLogo from "../assets/img/homepage/fosholer-doctor.png"
import forumLogo from "../assets/img/homepage/forum.png"
import krishiBazarLogo from "../assets/img/homepage/krishi-bazar.png"
import Banner from "components/Banner"
import card from "components/ViewCard"

import bg from 'assets/img/homepage/BG.png'

const component = <>
  {card(forumLogo, "কৃষি ফোরাম", "/krishi-forum")}
  {card(krishiBazarLogo, "কৃষি বাজার", "/krishi-bazar")}
  {card(fosholerDoctorLogo, "ফসলের ডাক্তার", "/fosholer-doctor")}
</>
function Home() {
  return (
    <>{Banner(component, bg)}</>
  )
}

export default Home