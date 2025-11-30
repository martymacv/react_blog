import styles2 from './Layout.module.css'

import { Outlet } from "react-router-dom";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";
import { useGlobalState } from "./GlobalProvider";
import { useEffect, useState } from "react";

function Layout() {
  const styles = "flex flex-col shadow-sidebar gap-4 min-h-full w-[300px] bg-[#202020ff] items-center"
  const {
    profileStatus
  } = useGlobalState();

  return (
    // <div id="header"className="flex flex-row min-h-screen min-w-[680px] max-w-[1000px] bg-[#181818ff]">
    <div id="header" className="flex flex-row min-h-screen w-full bg-[#181818ff]">
        <aside className={`${profileStatus === 'new' ? `${styles}` : 'hidden'}`}>
            <Sidebar/>
        </aside>
        <div className="flex flex-col w-full">
            <header className='sticky'>
                <Header/>
            </header>
            <main className="main">
              <Outlet className="w-full"/>
            </main>
            
        </div>
    </div>
  );
}

export default Layout;