import styles2 from './Layout.module.css'

import { Outlet } from "react-router-dom";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";
import { useGlobalState } from "./GlobalProvider";
import { useEffect, useState } from "react";

function Layout() {
  const {
    profileStatus
  } = useGlobalState();

  return (
    // <div id="header"className="flex flex-row min-h-screen min-w-[680px] max-w-[1000px] bg-[#181818ff]">
    <div id="header" className="flex flex-row min-h-screen w-full bg-[#181818ff]">
        <div className="flex flex-col gap-7 w-full">
            <header className='sticky'>
                <Header/>
            </header>
            <aside className={`${profileStatus !== 'new' && 'hidden'}`}>
              <Sidebar/>
            </aside>
            <main className="main mb-7">
              <Outlet className="w-full"/>
            </main>
            
        </div>
    </div>
  );
}

export default Layout;