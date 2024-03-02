import React from 'react'
import  ReactDOM  from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
const App = () => {
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
            <h1 className="display-5 text-center">Seus Pedidos</h1>
            </div>
        </div>
        {/* linha dos pedidos */}
        <div className="row">
            <div className="col-sm-12 col-lg-6 col-xl-3">
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex"></div>
                    <div className="d-flex align-items-center">
                        <i className="fa-regular fa-hard-drive fa-2x fa-beat-fade"></i>
                    </div>
                    <div className="flex-grow-1 ms-3 border">
                        <h4 className="text-center">HD</h4>
                        <p className="text-center">HD 1Tb</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-3">
            <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex"></div>
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-memory fa-2x fa-beat-fade"></i>
                    </div>
                    <div className="flex-grow-1 ms-3 border">
                        <h4 className="text-center">RAM</h4>
                        <p className="text-center">Memoria 16GB</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-3">
            <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex"></div>
                    <div className="d-flex align-items-center">
                        <i className="fa-brands fa-java fa-2x fa-beat-fade"></i>
                    </div>
                    <div className="flex-grow-1 ms-3 border">
                        <h4 className="text-center">Java</h4>
                        <p className="text-center">Projeto simples</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-3">
            <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex"></div>
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-gamepad fa-2x fa-beat-fade"></i>
                    </div>
                    <div className="flex-grow-1 ms-3 border">
                        <h4 className="text-center">Game</h4>
                        <p className="text-center">Game App</p>
                    </div>
                </div>
            </div>    
         </div>  
    </div>
}

ReactDOM.render(
    <App />

    ,document.querySelector('#root')
)