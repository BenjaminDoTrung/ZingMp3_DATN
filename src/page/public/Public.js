import {Outlet} from "react-router-dom";

import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import Player from "../../components/Player";

const Public = () => {
    return (
        <div className='w-full relative h-screen flex flex-col bg-main-300'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] h-full flex-none border border-blue-500'>
                    <SidebarLeft />
                </div>
                <div className='flex-auto border border-red-500'>
                    <Outlet />
                </div>
                <div className='w-[329px]  flex-none border border-green-500 animate-slide-left '>
                    <SidebarRight />
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 h-[90px]'>
                <Player />
            </div>
        </div>
    )
}
export default Public