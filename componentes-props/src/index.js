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
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className='bg-secondary'>caixa1</div>

            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className='bg-secondary'>caixa2</div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className='bg-secondary'>caixa3</div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className='bg-secondary'>caixa4</div>
            </div>    
         </div>  coo
    </div>
}

ReactDOM.render(
    <App />
    ,document.querySelector('#root')
)