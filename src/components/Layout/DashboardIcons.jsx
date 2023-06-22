import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

function DashboardIcons(props) {
  return (
    <div>
    <div className='bg-white sidebar p-2'>
      <div className='m-2'>
        <i className='bi bi-house me-2 fs-4'></i>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <Link to={"/"} className='list-group-item py-2'>
        <i className='bi bi-speedometer2 fs-5 me-3'></i>  
        </Link>
          <Link to={"/evenements"} className='list-group-item py-2'>
          <i className='bi bi-calendar fs-7  p-3'></i>   
          </Link>
          <Link to={"/type"} className='list-group-item py-2' >
          <i className='bi bi-calendar-minus fs-7  p-3'></i>  
          </Link>
          <Link to={"/experiences"} className='list-group-item py-2'>
          <i className='bi bi-table fs-7  p-3'></i>
          </Link>  
        <Link to={"/organisateurs"}  className='list-group-item py-2'>
        <i className='bi bi-people fs-7  p-3'></i>
        </Link>
        <Link  className='list-group-item py-2'>
        <i className='bi bi-people fs-7  p-3'></i>
        </Link>
      </div>
    </div>
        </div>
  );
}

export default DashboardIcons;
