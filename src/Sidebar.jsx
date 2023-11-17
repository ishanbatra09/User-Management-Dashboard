import React from 'react'
import 
{BsCart3, BsGrid1X2Fill,  BsPeopleFill}
 from 'react-icons/bs'
 import {useState } from 'react'
 import Home from './Home';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  const [tab,setTab]=useState(1);

  function activeTab(tabNumber){
    setTab(tabNumber);
  }
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                 User Management Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={() => activeTab(1)}>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> User Details Tab
                </a>
            </li>
            
           
            <li className='sidebar-list-item' onClick={()=>activeTab(2)}>
                <a href="">
                    <BsPeopleFill className='icon'/> Account Creation Tab
                </a>
            </li>
           
           
           
        </ul>
    </aside>
  )
  
}

export default Sidebar