import React from 'react';
import Navbar from '../Layout/Navbar'

function TypesEvenement(props) {
  return (
    <Navbar>


        <div className="container-fluid" id="container-wrapper">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Type Evenements</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="https://app.ouellett.com/admin/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Type evenements</li>
                </ol>
            </div>

            <div class="row mb-3">
                <div class="col-xl-7 col-lg-6">
                    <div class="card mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h5 class="m-0 font-weight-bold text-primary">Types d'evenements</h5>
                            <div class="dropdown no-arrow">
                                <a class="dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink" x-placement="bottom-end"  x-out-of-boundaries="">

                                </div>
                            </div>
                        </div>

                        <div >
    
                            <div class="card-body">
                                <div class="customer-message align-items-center">
                                    <a class="link-underline-light" role="button" tabindex="0" >
                                        <div class="text-truncate message-title">Nom : lancement de produit</div>
                                        <div class="small text-muted message-time font-weight-bold">Desc. : Le lancement de produit est un événement interne pour promouvoir un nouveau produit ou service. C’est un type d’événement très plébiscité par les grands groupes, notamment automobiles. Il est censé attirer beaucoup de journalistes afin que l’information soit relayée au maximum. Le lancement de produit a souvent lieu le soir et dans un lieu d’exception. La communication est un élément primordial pour réussir ce type d’événement.</div>
                                    </a>
                                </div>
                                <hr class="sidebar-divider"/>
                                <div class="customer-message align-items-center">
                                    <a class="link-underline-light" role="button" tabindex="0">
                                        <div class="text-truncate message-title">Nom : incentive</div>
                                        <div class="small text-muted message-time font-weight-bold">Desc. : L’incentive poursuit les mêmes objectifs que le team-building, à savoir resserrer les liens entre les collaborateurs et donc d’améliorer leurs performances. Cependant, il diffère dans sa forme. L’incentive se déroule en général sur plusieurs jours dans une destination prestigieuse et quasiment vacancière. C’est l’un des types d’événements qui demande la plus grande organisation de par sa durée. Il faut également gérer tous les aspects propres à l’organisation d’événements tels que l’hébergement, les animations ou le traiteur.</div>
                                    </a>
                                </div>
                                <hr class="sidebar-divider"/>
                                <div class="customer-message align-items-center">
                                    <a class="link-underline-light" role="button" tabindex="0">
                                        <div class="text-truncate message-title">Nom : team-building</div>
                                        <div class="small text-muted message-time font-weight-bold">Desc. : Voilà l’activité qui plaît certainement à une majorité de collaborateurs. L’objectif du team-building est de renforcer la motivation de l’équipe et la cohésion entre ses membres.

                    C’est généralement une activité ludique organisée par un spécialiste. 

                    Les animations de team-building existantes sont extrêmement nombreuses. Les agences ont pour l’habitude de créer leurs propres concepts originaux ce qui rend les possibilités innombrables. Le team-building fait partie des types d’événements les plus en vogue ces dernières années. Il peut aussi s’intégrer à une journée de séminaire ou incentive.</div>
                                    </a>
                                </div>
                                <hr class="sidebar-divider"/>
                                <div class="customer-message align-items-center">
                                    <a class="link-underline-light" role="button" tabindex="0">
                                        <div class="text-truncate message-title">Nom : salon professionnel</div>
                                        <div class="small text-muted message-time font-weight-bold">Desc. : Voilà un événement réservé aux gros budgets. Le salon demande beaucoup d’investissements de la part de l’organisateur, que cela soit financier ou humain. En général, il sert à promouvoir son activité ou un secteur d’activité. Il peut regrouper grand public et professionnels (exposants, prestataires, journalistes…) ou bien être réservé à ces derniers.</div>
                                    </a>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="float-right">
                                    <div class="col-sm-12 col-md-7">
                                        <nav aria-label="...">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a class="page-link" href="javascript:;" tabindex="-1">Prec.</a></li>
                                        <li class="page-item active" aria-current="page"><a href="javascript:;"  class="page-link"><span>1</span></a></li>
                                        <li class="page-item"><a href="javascript:;" class="page-link">2</a></li>
                                        <li class="page-item"><a href="javascript:;" class="page-link" >Suiv.</a></li>
                                    </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>

    
            <div className="col-xl-4 col-lg-5 ">
                <div className="card">
                    <div className="card-header py-4 bg-primary d-flex flex-row align-items-center justify-content-between">
                        <h5 className="m-0 font-weight-bold text-light">Ajouter types d'evenements</h5>
                    </div>
                    <div className="card-body">
                        <form className='' method="POST" action="https://app.ouellett.com/admin/events/types/store">
                            <input type="hidden" name="_token" value="JJmDmWWpHEpFDTrcxUzs8Bvu0geMMcfFGs2sFSQG"/>                    
                            <div className="mb-3">
                                <label for="name">Nom</label>
                                <input type="text" name="name" className="form-control " id="name" placeholder="Enter nom"/>
                                <small id="emailHelp" className="form-text text-muted">le titre du type d'evenement.</small>
                            </div>
                            <div class="mb-3">
                                <label for="description">Description</label>
                                <input type="text" name="description" className="form-control " id="description" placeholder="Enter description"/>
                                <small id="emailHelp" className="form-text text-muted">une brève description du type d'evenement.</small>
                            </div>
                            <div className="mb-3">
                            <div class="input-group">
                                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                                <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">Photo</button>
                            </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>

        </div>


    </Navbar>
  )
}

export default TypesEvenement