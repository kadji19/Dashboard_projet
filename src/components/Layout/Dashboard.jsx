import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard(props) {
  return (
    <div>

<ul className="navbar-nav sidebar sidebar-light accordion toggled  " id="accordionSidebar">
            <a className="logo list-group-item py-2 d-flex align-items-center justify-content-center ">
                <div className="sidebar-brand-icon">
                    <img src=''/>
                </div>
                <div className="sidebar-brand-text text-white mx-3">Ouimoove</div>
            </a>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active py-2">
                <Link to={"/"} className="hover nav-link" >
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading l">EVENEMENTS</div>
            <li className="nav-item ">
              <Link to={"/evenements"} className='hover nav-link'>
              <i className='bi bi-calendar fs-7  p-3'></i>
              <span>Evenement</span>   
            </Link>  
            </li>
            <li className="nav-item ">
            <Link to={"/type"} className='hover nav-link'>
            <i className='bi bi-calendar-minus fs-7 p-2'></i>
            <span>Type Evenement</span>   
          </Link>
            </li>
            <li className="nav-item ">
            <Link to={"/evenements"} className='hover nav-link'>
              <i className='bi bi-table fs-7  p-3'></i>
              <span>Experiences</span>   
            </Link>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">ORGANISATEURS</div>
            <li className="nav-item ">
            <Link to={"/organisateurs"} className='hover nav-link'>
              <i className='bi bi-people fs-7  p-3'></i>
              <span>Organisateurs</span>   
            </Link>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">MEMBRES</div>
            <li className="nav-item ">
            <Link to={"/evenements"} className='hover nav-link'>
              <i className='bi bi-people fs-7  p-3'></i>
              <span>Membres</span>   
            </Link>
            </li>
            <hr className="sidebar-divider"/>
        </ul>
        </div>
  );
}

export default Dashboard;
