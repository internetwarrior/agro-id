import React from 'react'
import scss from '../post/Post.module.scss'
import search from "../../static/svg/ssvg.svg";


export const InputSearch = (props) => {
  return (
   <div className={scss.inputContainer}>
   <img src={search} alt="j" />
   <input
     className={scss.input}
     type="text"
     placeholder={props.placeholder}
     name=""
     id=""
   />
 </div>
  )
}
