import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  const [theme,setTheme] = useState("dark");
  console.log("Current theme",theme)
  return (
    <div className={`relative sm:-8 p-4 ${theme==="dark"?"bg-[#13131a]":"bg-white"} min-h-screen flex flex-row`}>
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar theme={theme} setTheme={setTheme}/>
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar theme={theme} />

        <Routes>
          <Route path="/" element={<Home theme={theme}/>} />
          <Route path="/profile" element={<Profile theme={theme}/>} />
          <Route path="/create-campaign" element={<CreateCampaign theme={theme}/>} />
          <Route path="/campaign-details/:id" element={<CampaignDetails theme={theme}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App