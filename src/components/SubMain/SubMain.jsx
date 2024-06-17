import React from 'react'
import ReusableIcon from '../ReusableIcon'
import { GiBookshelf } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { TbTransitionBottomFilled } from "react-icons/tb";

function SubMain() {
  return (
    <div className=' md:flex justify-around'>
      <ReusableIcon num={"600+"} val={"Diffrent Cources"} icon={<GiBookshelf/>} />
      <ReusableIcon num={"700,000+"} val={"Student Enrolled"} icon={<PiStudentFill/>} />
      <ReusableIcon num={"10,000+"} val={"Successful Transition"} icon={<TbTransitionBottomFilled />}  />

    </div>
  )
}

export default SubMain
