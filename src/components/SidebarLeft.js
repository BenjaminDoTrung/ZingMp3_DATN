
import logo from '../accsets/logo.svg'
import {NavLink} from "react-router-dom";
import {sidebarMenu} from "../untis/menu";
const notActiveStyle = 'py-2 px-[25px] font-bold text-[#32323D] text-[13px]  flex gap-[12px] items-center'
const activeStyle ='py-2 px-[25px] font-bold text-[#0F7070] text-[13px]  flex gap-[12px] items-center'
const SidebarLeft = () => {
    return (
        <div className={'flex h-full flex-col bg-[#DDE4E4]'}>
            <div className={'w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'}>
                <img src={logo} alt="" className={'w-[120px] h-10'}/>
            </div>
            <div className={'flex flex-col'}>
                {sidebarMenu.map(item => (
                    <NavLink to={item.path}
                             key={item.path}
                             end={item.end}
                             className= {({isActive}) => isActive ? activeStyle : notActiveStyle } >
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SidebarLeft