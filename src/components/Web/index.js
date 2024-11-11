import React, { useState, useRef, useEffect, memo } from "react"

const index = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">Feeco Li</h2>
        <h2 className="font-semibold text-lg">[Frontend/Backend/Fullstack Developer]</h2>
      </div>
      <div className="flex justify-center space-x-2">
        <li>Calgary Alberta</li>
        <li>lifeike67@gmail.com</li>
        <li>(403)400-5028</li>
        <li>likedinin.com/in/feeco</li>
      </div>
      <div>
        <div> skills</div>
        <div className="border-b-2 border-black"> </div>
        <div> Typescript, React, Node Express, MongoDB,AWS, TailwindCSS, ShadCN, MySql, Nextjs</div>
      </div>
      <div>
        <div> employment</div>
        <div className="border-b-2 border-black"> </div>
        <div> Typescript, React, Node Express, MongoDB,AWS, TailwindCSS, ShadCN, MySql, Nextjs</div>
      </div>
    </>
  )
}

export default index
