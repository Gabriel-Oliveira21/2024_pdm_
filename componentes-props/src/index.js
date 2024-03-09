import React from 'react'
import  ReactDOM  from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Rodape from './Rodape'
import Feedback from './Feedback'

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
            <Cartao cabecalho="22/04/24">
            <Pedido
            data="22/04/2024"
            iconeNome="fa-memory"
            iconeEfeito="fa-bounce"
            titulo="Memória RAM"
            descricao="16GB" />
            <Feedback
            textoOK="Já chegou"
            textoNOK="Ainda não chegou"
            funcaoOK={() => alert('Obrigado pelo feedback!')}
            funcaoNOK={() => alert('Verificaremos oque houve!')}
            />
            </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-3">
            <Cartao cabecalho="22/04/24">
            <Pedido
                      data="22/04/2024"
                      iconeNome="fa-hdd"
                      iconeEfeito="fa-flip"
                      titulo="HDD"
                      descricao="1TB" />
            <Feedback
            textoOK="Já chegou"
            textoNOK="Ainda não chegou"
            funcaoOK={() => alert('Obrigado pelo feedback!')}
            funcaoNOK={() => alert('Verificaremos oque houve!')}
            />
            </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-3">
            <Cartao cabecalho="22/04/24">
            <Pedido 
                      data="22/04/2024"
                      iconeNome="fa-book"
                      iconeEfeito="fa-shake"
                      titulo="livro"
                      descricao="Math Class"/>
            <Feedback
            textoOK="Já chegou"
            textoNOK="Ainda não chegou"
            funcaoOK={() => alert('Obrigado pelo feedback!')}
            funcaoNOK={() => alert('Verificaremos oque houve!')}
            />
            </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-3">
            <Cartao cabecalho="22/04/24">
            <Pedido 
                      data="22/04/2024"
                      iconeNome="fa-laptop"
                      iconeEfeito="fa-fade"
                      titulo="Nootebook"
                      descricao="i7 12th"/>
            <Feedback
            textoOK="Já chegou"
            textoNOK="Ainda não chegou"
            funcaoOK={() => alert('Obrigado pelo feedback!')}
            funcaoNOK={() => alert('Verificaremos oque houve!')}
            />
            </Cartao>
            </div>    
         </div>
         <div className="row">
          <Rodape nomeEmpresa ="Dispositivos Moveis" />  
        </div>  
    </div>
}

ReactDOM.render(
    <App />

    ,document.querySelector('#root')
)