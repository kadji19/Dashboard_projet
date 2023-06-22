import React from 'react';
import Navbar from '../Layout/Navbar';

export default function Dashbord(props) {
  return (
    <Navbar>
        <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="https://app.ouellett.com/admin/home">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
    </ol>
</div>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-xl-3 col-md-6 mb-4'>
                    <div className='card h-100 shadow-sm'>
                        <div className='card-body'>
                           <div className='row justify-content-around align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-muted text-uppercase mb-1 fs-20'>Evenement</div>
                                    <div className='h5 text-muted mb-0 fs-4'>8</div>
                                        <div className="mt-2 mb-0 text-muted">
                                            <span className="text-success mr-2"><i className="bi bi-arrow-up"></i> 3.48%</span>
                                            <span>Pour cette année</span>
                                        </div>
                                </div>
                                <div className="col-auto">
                                    <i className="bi bi-calendar fs-2 text-primary"></i>
                                </div>
                           </div>
                        </div>
                        
                    </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4 '>
                    <div className='card h-100 shadow-sm'>
                        <div className='card-body'>
                           <div className='row justify-content-around align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-muted text-uppercase mb-1 fs-20'>Client</div>
                                    <div className='h5 text-muted mb-0 fs-4'>8</div>
                                    <div className="mt-2 mb-0 text-muted ">
                                    <span className="text-success mr-2"><i class="bi bi-arrow-up"></i> 3.48%</span>
                                    <span>Pour cette année</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="bi bi-people-fill fs-2 text-success"></i>
                                </div>
                           </div>
                        </div>
                        
                    </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                    <div className='card h-100 shadow-sm'>
                        <div className='card-body'>
                           <div className='row justify-content-around align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-muted text-uppercase mb-1 fs-20'>Organisateurs</div>
                                    <div className='h5 text-muted mb-0 fs-4'>8</div>
                                    <div className="mt-2 mb-0 text-muted ">
                                    <span className="text-success mr-2"><i className="bi bi-arrow-up"></i> 3.48%</span>
                                    <span>Pour cette année</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="bi bi-people-fill fs-2 text-info"></i>
                                </div>
                           </div>
                        </div>
                        
                    </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                    <div className='card h-100 shadow-sm'>
                        <div className='card-body'>
                           <div className='row justify-content-around align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-muted text-uppercase mb-1 fs-20'>Experiences</div>
                                    <div className='h5 text-muted mb-0 fs-4'>8</div>
                                    <div className="mt-2 mb-0 text-muted ">
                                    <span className="text-success mr-2"><i class="bi bi-arrow-up"></i> 3.48%</span>
                                    <span>cette année</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="bi bi-wechat fs-2 text-warning"></i>
                                </div>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

<div className="card">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Clients</h6>

            <div className="float-right">
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <input type="search" className="form-control form-control-sm" placeholder="Recherche..."/>
                    </div>
                    <div className="col-sm-4 col-md-4">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Nom complet</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                                            <tr>
                            <td><a href="">FO14XN</a></td>
                            <td>des</td>
                            <td>nana.na0@aol.com</td>
                            <td><span className="badge badge-success">12105994677</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO13XN</a></td>
                            <td>Bold5</td>
                            <td>bold5@gmail.com</td>
                            <td><span className="badge badge-success">0022855555555</span></td>
                            <td><a href="https://app.ouellett.com/admin/clients/13" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO12XN</a></td>
                            <td>Fale4</td>
                            <td>fale4@gmail.com</td>
                            <td><span className="badge badge-success">0022811111114</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO11XN</a></td>
                            <td>fale3</td>
                            <td>fale3@gmail.com</td>
                            <td><span className="badge badge-success">0022811111111</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO10XN</a></td>
                            <td>Bold2</td>
                            <td>fale13@gmail.com</td>
                            <td><span className="badge badge-success">0022997171391</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO9XN</a></td>
                            <td>Bold</td>
                            <td>fale23@gmail.com</td>
                            <td><span className="badge badge-success">22897171387</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO8XN</a></td>
                            <td>Fale2</td>
                            <td>fale2@gmail.com</td>
                            <td><span className="badge badge-success">0022897171391</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO6XN</a></td>
                            <td>Fale</td>
                            <td>fale1@gmail.com</td>
                            <td><span className="badge badge-success">134567</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO5XN</a></td>
                            <td>filmora</td>
                            <td>fale@gmail.com</td>
                            <td><span className="badge badge-success">5454554</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO4XN</a></td>
                            <td>Josélito houmey</td>
                            <td>joselito.hil@gmail.com</td>
                            <td><span className="badge badge-success">70474988</span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                    </tbody>
            </table>
        </div>
        <div class="card-footer">
            <div class="float-right">
                <div class="col-sm-12 col-md-7">
                    <nav aria-label="...">
            <ul class="pagination">
                            <li class="page-item disabled"><a class="page-link" href="javascript:;" tabindex="-1">Prec.</a></li>
                            <li class="page-item"><a href="javascript:;"  class="page-link">Suiv.</a></li>
            </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
        </div>
    </Navbar>
    
  )
}
