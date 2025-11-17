import { Outlet } from "react-router-dom";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";
import { useGlobalState } from "./GlobalProvider";

function Layout() {
  const styles = "flex flex-col shadow-sidebar gap-4 min-h-full w-[300px] bg-[#202020ff] items-center"
  const {
    logStatus
  } = useGlobalState();

  return (
    // <div id="header"className="flex flex-row min-h-screen min-w-[680px] max-w-[1000px] bg-[#181818ff]">
    <div id="header" className="flex flex-row min-h-screen w-full bg-[#181818ff]">
        <aside className={logStatus === 'login' ? `${styles}` : 'hidden'}>
            <Sidebar/>
        </aside>
        <div className="flex flex-col w-full">
            <header>
                <Header/>
            </header>
            <main className="m-12">
              <Outlet className="w-full"/>
            </main>
            
        </div>
    </div>
  );
}

export default Layout;