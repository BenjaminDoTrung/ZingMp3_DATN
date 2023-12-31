import React from 'react';
import {AiOutlinePlayCircle} from "react-icons/ai";
import {GrCircleInformation} from "react-icons/gr";
import {VscSymbolInterface} from "react-icons/vsc";
import {LiaAddressBook} from "react-icons/lia";
import {GoArrowUpRight} from "react-icons/go";
import {IoShieldCheckmarkOutline} from "react-icons/io5";
import {PiFlag} from "react-icons/pi";
import {CiStopSign1} from "react-icons/ci";
import {FiPhone} from "react-icons/fi";
import {SlArrowRight} from "react-icons/sl";
import "../css_component/menuSetting.css"


const MenuSetting = (props) => {
    console.log(props.name)
    return (
        <>
            <div className="menu_setting">
                <ul className="form_menu">
                    <li>
                        <div className="icon">
                            <AiOutlinePlayCircle />
                        </div>
                        <div className="content">
                            Trình phát nhạc
                        </div>
                        <div className="icon" style={{marginLeft:"auto"}}>
                            <SlArrowRight />
                        </div>
                    </li>
                    <li className= "li-form">
                            <div className="icon">
                                <VscSymbolInterface />
                            </div>
                            <div className="content" style={{}}>
                                Giao diện
                            </div>
                            <div className="icon" style={{marginLeft:"auto"}}>
                                <SlArrowRight />
                            </div>
                    </li>
                    <div className= "vach"></div>
                    <li>
                        <div className="icon">
                            <GrCircleInformation />
                        </div>
                        <div className="content">
                            Giới thiệu
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <LiaAddressBook />
                        </div>
                        <div className="content">
                            Tỏa thuận sử dụng
                        </div>
                        <div className="icon" style={{marginLeft:"auto"}}>
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <IoShieldCheckmarkOutline />
                        </div>
                        <div className="content">
                            Chính sách bảo mật
                        </div>
                        <div className="icon" style={{marginLeft:"auto"}}>
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <PiFlag />
                        </div>
                        <div className="content">
                            Báo cáo vi phạm bản quyền
                        </div>
                        <div className="icon" style={{marginLeft:"auto"}}>
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <CiStopSign1 />
                        </div>
                        <div className="content">
                            Quảng cáo
                        </div>
                        <div className="icon" style={{marginLeft:"auto"}}>
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FiPhone />
                        </div>
                        <div className="content">
                            Liên hệ
                        </div>
                        <div className="icon" style={{marginLeft:"auto"}}>
                            <GoArrowUpRight />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MenuSetting;