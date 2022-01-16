import React from 'react'
import { AiOutlineVideoCameraAdd, AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { ImPencil2, ImBook, ImCommand } from "react-icons/im";

const Sidebar = ({ onHamburger }) => {
    return (
        <div className="flex flex-row">
            <div className="sidebar transition transform hover:-translate-x-10 motion-reduce:transition-none motion-reduce:transform-none" >
                <div className="h-14 text-white flex justify-start items-center space-x-2">
                    <button className="mr-6"><AiOutlineMenu color="white" className="w-6 h-6" onClick={onHamburger} /></button>
                    <div className="py-2 bg-red-700 rounded-xl w-10 flex items-center justify-center"><ImPencil2 color="white" /></div>
                    <span className="text-xl text-white">Testud.init</span>
                </div>
                <div className="text-white space-y-2">
                    <div className="h-10 bg-opacity-60 flex justify-start items-center"><ImBook className="mx-6" /> MY COURSES</div>
                    <div className="h-10 bg-opacity-60 flex justify-start items-center"><AiOutlineMessage className="mx-6" />MESSAGES</div>
                    <div className="h-10 bg-opacity-60 flex justify-start items-center"><ImCommand className="mx-6" />ASSIGNMENTS</div>
                    <div className="h-10 bg-opacity-60 flex justify-start items-center"><IoMdSettings className="mx-6" />SETTINGS</div>
                    <div className="h-10 bg-opacity-60 flex justify-start items-center"><AiOutlineVideoCameraAdd className="mx-6" />MEET</div>
                </div>
            </div>
            <button onClick={onHamburger} className=" bg-black bg-opacity-50 w-4/5" />
        </div>)
}

export default Sidebar;
