import React from 'react';
import {Bs0Circle, BsMusicNoteList, BsStar} from "react-icons/bs";
import {GiChart, GiLoveSong, GiMusicalNotes} from "react-icons/gi";
import {CgFormatRight} from "react-icons/cg";
import "../../css_component/HomeUser.css"
import logo from "../../accsets/logo.svg";
import {HiOutlinePlus} from "react-icons/hi";
import {CiSettings} from "react-icons/ci";
import {RiFileDownloadFill} from "react-icons/ri";

const HomeUser = props => {
    return (
        <>
           <div className="home-user">
               <div className="home_user">
                   <div className="sideBar">
                       <div className="logo">
                           <img src={logo} alt="" className={'w-[120px] h-10'}/>
                       </div>
                       <div className="side_bar_menu1">
                           <ul>
                               <li>
                                   <div className="side_bar_icon">
                                       <Bs0Circle />
                                   </div>
                                   <button className="side_content">Khám phá</button>
                               </li>
                               <li>
                                   <div className="side_bar_icon">
                                       <GiChart />
                                   </div>
                                   <button className="side_content">#ZingChart</button>
                               </li>
                               <li>
                                   <div className="side_bar_icon"><GiLoveSong /></div>
                                   <button className="side_content">Radio</button>
                               </li>
                               <li>
                                   <div className="side_bar_icon"><BsMusicNoteList /></div>
                                   <button className="side_content">Thư viện</button>
                               </li>
                           </ul>
                       </div>
                       <div className="side_bar_menu2">
                           <ul>
                               <li>
                                   <div className="side_bar_icon"><GiMusicalNotes /></div>
                                   <button className="side_content">BXH Nhạc Mới</button>
                               </li>
                               <li>
                                   <div className="side_bar_icon"><CgFormatRight /></div>
                                   <button className="side_content">Chủ đề & Thể loại</button>
                               </li>
                               <li>
                                   <div className="side_bar_icon"><BsStar /></div>
                                   <button className="side_content">Tốp 100</button>
                               </li>
                           </ul>
                       </div>
                       <div className="side_Logout">
                           <button className="button-logout">LogOut</button>
                       </div>
                       <div className="side_bar_createPlaylist">
                           <div className="side_bar_icon">
                               <HiOutlinePlus />
                           </div>
                           <button className="side_bar_createPlaylist_content">Tạo playlist mới</button>
                       </div>
                   </div>
               </div>
               <div className="header">
                   <div className="header-left">
                       <div className="header-icon">

                       </div>
                       <div className="header-icon">

                       </div>
                       <div className="sear">
                           <div className="search-icon">
                               <input className="search-input"/>
                           </div>
                       </div>ch
                   </div>
                   <div className="header-right">
                       <div className="header-right-download">
                           <div className="header-icon">
                               <RiFileDownloadFill />
                           </div>
                           <div className="header-content">Tải bản Window</div>
                       </div>
                       <div className="header-setting">
                           <CiSettings />
                       </div>
                       <img/>
                   </div>
               </div>
           </div>
        </>
    );
};

HomeUser.propTypes = {

};

export default HomeUser;