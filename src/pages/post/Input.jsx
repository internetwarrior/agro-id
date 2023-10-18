import React from 'react'
import scss from './Post.module.scss'
import search from "../../static/svg/ssvg.svg";


export const Input = ({placeholder}) => {
  return (
   <div className={scss.inputContainer}>
   <img src={search} alt="" />
   <input
     className={scss.input}
     type="text"
     placeholder={placeholder}
     name=""
     id=""
   />
 </div>
  )
}
