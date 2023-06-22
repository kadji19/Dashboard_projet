import React, { useState } from 'react'
import classe from "./Navbar.module.css";
import 'boxicons';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './Dashboard';
import Nav from './Nav';
import DashboardIcons from './DashboardIcons';
/* import Dashbord from '../Page/Dashbord';
import Evenements from '../Page/Evenements';
import Experiences from '../Page/Experiences'; */

export default function Navbar(props) {
    const [toggle, setToggle] = useState(true)
    const Toggle = () =>{
      setToggle(!toggle)
    }
  return (
    <div /* className='container-fluid bg-secondary min-vh-100' */>
        <div className={classe.row}>
        { toggle ?
            <div className={classe.dashboard}>
                <Dashboard/>
            </div> :
            <div className={classe.dashboard_icons}>
                <DashboardIcons/>
            </div>}
            <div className='col'>
                <div className={classe.nav}>
                    <Nav Toggle={Toggle} />
                </div>
                <div className={classe.content}>
                    {props.children}
                </div>
        </div>
        </div>

    </div>
  )
}
