import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({ btnText, btnIcon, btnClr, onClick }) => {
  return (
    <button
      onClick={onClick} // ✅ MUST HAVE THIS
      className={`mt-6 px-6 py-3 rounded-full hover:cursor-pointer hover:bg-black ${btnClr}`}
    >
      {btnIcon && <span className="mr-2"><FontAwesomeIcon icon={btnIcon} className="mr-2" /></span>}
      {btnText}
    </button>
  );
};

export default Button;