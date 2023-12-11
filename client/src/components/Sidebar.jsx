import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ theme,styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} ${isActive && isActive === name && theme==="light" && 'bg-gray-100 shadow border'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = ({theme,setTheme}) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  console.log("Theme in sidebar ",theme)

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles={`w-[52px] h-[52px] ${theme==="dark"?"bg-[#2c2f32]":"bg-gray-200 shadow border"}`} imgUrl={logo} />
      </Link>

      <div className={`flex-1 flex flex-col justify-between items-center ${theme==="dark"?"bg-[#1c1c24]":"bg-gray-50 border shadow"} rounded-[20px] w-[76px] py-4 mt-12`}>
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              theme={theme}
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <div onClick={()=>setTheme(theme ==="light"?"dark":"light")}>
          <Icon styles={`${theme==="dark"?"bg-[#1c1c24]":"bg-gray-50 border shadow"} shadow-secondary`} imgUrl={sun} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar