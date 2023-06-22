import React from 'react';
import Navbar from '../Layout/Navbar'

function Evenements(props) {
  return (
    <Navbar>
        <div className="container-fluid" id="container-wrapper">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Evenements</h1>
    <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Evenements</li>
    </ol>
</div>
                
<div className="row mb-3">
    
    <div className="col-xl-12 col-lg-12 mb-4">
        <div >
    
    <div className="card">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Evenements</h6>

            <div className="float-right">
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <input type="search"  className="form-control form-control-sm" placeholder="Recherche..."/>
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
                        <th>Nom even.</th>
                        <th>Type</th>
                        <th>Desc.</th>
                        <th>Lieux</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                                            <tr>
                            <td><a href="">FO8XN</a></td>
                            <td>Conférence sur la santé</td>
                            <td>conférence</td>
                            <td>Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat</td>
                            <td><span className="badge badge-success"></span></td>
                            <td><a href="https://app.ouellett.com/admin/events/8" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO7XN</a></td>
                            <td>Congrès Orabank</td>
                            <td>congrès</td>
                            <td>Batnae municipium in Anthemusia conditum Macedonum...</td>
                            <td><span className="badge badge-success"></span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO6XN</a></td>
                            <td>Séminaire sur le droits de la jeune fille</td>
                            <td>séminaire</td>
                            <td>Batnae municipium in Anthemusia conditum Macedonum...</td>
                            <td><span className="badge badge-success"></span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO5XN</a></td>
                            <td>Salon International des entrepreneurs</td>
                            <td>salon professionnel</td>
                            <td>Batnae municipium in Anthemusia conditum Macedonum...</td>
                            <td><span className="badge badge-success"></span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO4XN</a></td>
                            <td>Team building</td>
                            <td>team-building</td>
                            <td>Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter proficiscere inquit ut praeceptum est</td>
                            <td><span className="badge badge-success"></span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO3XN</a></td>
                            <td>Lancement de Ouimoove</td>
                            <td>lancement de produit</td>
                            <td>Welcome au lancement officiel de l'app Ouimoove</td>
                            <td><span className="badge badge-success"></span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO2XN</a></td>
                            <td>Castor Spears</td>
                            <td>incentive</td>
                            <td>Molestiae sit non es</td>
                            <td><span class="badge badge-success"></span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
                        </tr>
                                            <tr>
                            <td><a href="">FO1XN</a></td>
                            <td>Madeson Garrett</td>
                            <td>congrès</td>
                            <td>Suscipit ad ea et no</td>
                            <td><span className="badge badge-success"></span></td>
                            <td><a href="" className="btn btn-sm btn-primary">Detail</a></td>
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

export default Evenements