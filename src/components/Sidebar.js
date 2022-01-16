import React from 'react'
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { ImPencil2, ImBook, ImMenu, ImCommand } from "react-icons/im";

const Sidebar = ({ onHamburger }) => {
    return (
        <div className="flex flex-row">
            <div className="sidebar z-10" >
                <div className="h-14 text-white flex justify-start items-center space-x-2">
                    <button className="mr-6"><AiOutlineMenu color="white" className="w-6 h-6 hover:origin-center hover:rotate-90 hover:duration-700" onClick={onHamburger} /></button>
                    <div className="py-2 bg-red-700 rounded-xl w-10 flex items-center justify-center"><ImPencil2 color="white" /></div>
                    <span className="text-xl text-white">Testud.init</span>
                </div>
                <div className="text-white space-y-2">
                    <button className="nav-option"><ImBook className="mx-6 hover:origin-center hover:rotate-90 hover:duration-300" /> MY COURSES</button>
                    <button className="nav-option"><AiOutlineMessage className="mx-6" />MESSAGES</button>
                    <button className="nav-option"><ImCommand className="mx-6" />ASSIGNMENTS</button>
                    <button className="nav-option"><IoMdSettings className="mx-6" />SETTINGS</button>
                    <button className="nav-option"><AiOutlineVideoCameraAdd className="mx-6" />MEET</button>
                </div>
            </div>
            <button onClick={onHamburger} className=" bg-black bg-opacity-50 w-4/5" />
        </div>)
}

export default Sidebar;
