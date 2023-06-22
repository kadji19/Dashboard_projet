import React, { useState } from 'react';
import Navbar from '../Layout/Navbar'
import { Form } from 'react-router-dom';

function Organisateurs() {
    const [form, setform] = useState(false)
/* 
    Form = ()=>{
        setform(!form)
    } */
  return (
    <Navbar>

<div className="container-fluid " id="container-wrapper">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Organisateur</h1>
    <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Organisateur</li>
    </ol>
</div>

                
<div className="row mb-3">

    <div className="col-xl-12 col-lg-12 mb-4">
        <div >
    
    <div className="card bg-white">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Organisateur</h6>

            <div className="float-right">
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <input type="search"  className="form-control form-control-sm" placeholder="Recherche..."/>
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <button className="m-0 float-right btn btn-danger btn-sm" type="button" data-toggle="modal" data-target="#exampleModalCenter" id="#modalCenter"  >
                            Ajouter {/* <i className="bi bi-chevron-right"></i> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter Organisateur</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="POST" action="" id="add-member">
                            <input type="hidden" name="_token" value="JJmDmWWpHEpFDTrcxUzs8Bvu0geMMcfFGs2sFSQG"/>                            
                            <div className="form-group">
                                <label for="name">Nom complet</label>
                                <input name="name" id="name" type="text" className="form-control " value="" required="" autocomplete="name" autofocus=""/>
                                                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input name="email" id="email" className="form-control " value="" type="email" placeholder="Email" autocomplete="email" autofocus=""/>
                                                            </div>
                            <div className="form-group">
                                <label for="numero">Numero</label>
                                <input name="phone" id="numero" className="form-control " value="" type="text" placeholder="Numéro" autofocus=""/>
                                                            </div>
                            <div className="form-group">
                                <label for="password">Mot de Passe</label>
                                <input name="password" id="password" className="form-control " type="password" placeholder="Min 8 charactères" required="" autocomplete="new-password"/>
                                                            </div>
                            <div className="uk-width-1-1 uk-margin uk-text-center">
                                <p className="uk-text-small uk-margin-remove">En vous inscrivant vous accepter nos <a class="uk-link-border" href="https://app.ouellett.com">terms et conditions d'utilisations.</a></p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Annuler</button>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#logoutModal" onclick="event.preventDefault(); document.getElementById('add-member').submit();">Ajouter</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-responsive shadow-sm">
            <table className="table align-items-center table-flush">
                <thead className="thead-secondary">
                    <tr>
                        <th>ID</th>
                        <th>Nom complet</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Date d'inscription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td><a href="">OO2XU</a></td>
                            <td>Test orga.</td>
                            <td>organ@gmail.com</td>
                            <td><span className="badge badge-success">70382781</span></td>
                            <td>2023-04-24 10:18:57</td>
                            <td><a href="" class="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</div>

            </div>


    </Navbar>
  )
}

export default Organisateurs