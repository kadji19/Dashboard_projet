import React from 'react';
import 'bootstrap/js/dist/dropdown'
import 'boxicons'
import './nav.css'

function Nav({Toggle}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-transparent p-1 color-white " >
{/*     <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle} ></i> */}

    <button className="menu-hover btn btn-link"><box-icon name='menu' color='white' onClick={Toggle}></box-icon></button>
    
    {/* <box-icon name='menu' onClick={Toggle}></box-icon> */}
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item dropdown p-2">
          <div>

          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" id='dropdownId' data-bs-toggle="dropdown" aria-aria-haspopup="true" aria-expanded="false">
          <button className="btn btn-link"><box-icon name='search' color='white'></box-icon></button>
          </a>
          <div className="dropdown-menu dropdown-menu-lg-end" aria-labelledby='dropdownId'>
          <form class="navbar-search">
                                <div class="input-group">
                                <input type="text" class="form-control bg-light border-1 small" placeholder="What do you want to look for?" aria-label="Search" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">
                                    <box-icon name='search' color='white'></box-icon>
                                    </button>
                                </div>
                                </div>
                            </form>
          </div>
        </li>
        <li className="nav-item">
          <div className='dropdown-center'>
          <a className="nav-link dropdown-toggle" href="#" role="button" id='dropdownId' data-bs-toggle="dropdown" aria-aria-haspopup="true" aria-expanded="false">
          <button className="btn btn-link "><box-icon name='user-circle' color='white' ></box-icon></button>
          <span className='text-bg-white'>Admin</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg-end" aria-labelledby='dropdownId'>
            <a className="dropdown-item" href="#">profile</a>
            <a className="dropdown-item" href="#">settings</a>
            <a className="dropdown-item" href="#">logout</a>
          </div>
          </div>
        </li>
      </ul>
    </div>
</nav>
  )
}

export default Nav