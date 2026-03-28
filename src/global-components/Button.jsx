import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ btnClr, btnText, btnIcon }) => {
  return (
    <button className={`mt-6 px-6 py-3 rounded-full hover:cursor-pointer hover:bg-black ${btnClr}`}>
      <FontAwesomeIcon icon={btnIcon} className="mr-2" />
      {btnText}
    </button>
  )
}

export default Button