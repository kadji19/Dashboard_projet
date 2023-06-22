import React from 'react'

function DetailEvenements() {
  return (
    <div>


<div class="container-fluid" id="container-wrapper">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Détails Evenement</h1>
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="https://app.ouellett.com/admin/home">Home</a></li>
        <li class="breadcrumb-item"><a href="https://app.ouellett.com/admin/events">Evenements</a></li>
        <li class="breadcrumb-item active" aria-current="page">Détails Evenement</li>
    </ol>
</div>

                <div class="row mb-3">
    <div class="col-lg-6">
        <div class="card mb-4">
            <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-primary">Evenement</h5>
            </div>
            <div class="card-body">
                <h4>Conférence sur la santé</h4>
                <p>Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat</p>

                <div class="mb-2">
                    <code>Règlements</code>
                </div>
                <p>Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat</p>

                <div class="mt-4 mb-2">
                    <code>Condition d'annulation</code>
                </div>
                <p>Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis,</p>

                <div class="mt-4 mb-2">
                    <code>Auteur</code>
                </div>
                <h5>Test orga.</h5>
            </div>
        </div>
    </div>

    <div class="col-lg-6">
        <div class="card mb-4">
            <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-primary">Info Tickets</h5>
            </div>
            <div class="card-body">
                                    <p>Place vip <span class="float-right text-danger">2000FCFA</span></p>
                    <div class="my-2"></div>
                            </div>
        </div>
    </div>
</div>
            </div>



    </div>
  )
}

export default DetailEvenements