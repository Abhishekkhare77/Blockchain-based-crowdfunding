import React from 'react'

const CountBox = ({ theme,title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className={`font-epilogue font-bold text-[30px] ${theme==="dark"?"text-white":"text-gray-900"} p-3 ${theme==="dark"?"bg-[#1c1c24]":"bg-gray-200"} rounded-t-[10px] w-full text-center truncate`}>{value}</h4>
      <p className={`font-epilogue font-normal text-[16px] text-[#808191] ${theme==="dark"?"bg-[#28282e]":"bg-gray-300"} px-3 py-2 w-full rouned-b-[10px] text-center`}>{title}</p>
    </div>
  )
}

export default CountBox