import React from 'react'
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ImPencil2 } from "react-icons/im";

const Sidebar = ({ onHamburger }) => {
    return (
        <div className="absolute bg-black bg-opacity-50 z-40 w-screen h-screen">
            <div className="sidebar">
                <div className="h-14 text-white flex justify-start items-center space-x-2">
                    <button className="mr-6"><AiOutlineMenu color="white" className="w-6 h-6" onClick={onHamburger} /></button>
                    <div className="py-2 bg-red-700 rounded-xl w-10 flex items-center justify-center"><ImPencil2 color="white" /></div>
                    <span className="text-xl text-white">Testud.init</span>
                </div>
                <div className="text-white space-y-2">
                    <div className="h-10 bg-opacity-60 flex justify-center items-center">2</div>
                    <div className="h-10 bg-opacity-60 flex justify-center items-center">3</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
