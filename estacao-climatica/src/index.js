import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
   // window.navigator.geolocation.getCurrentPosition((position) => {
   // console.log(position)
//})

constructor(props){
    super(props)
    this.state ={
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null
    }
}
icones = {
    'Verão': 'sun',
    'Inverno': 'snowflake',
    'Outono': 'canadian-maple-leaf',
    'Primavera': 'tree',
}
obterEstacao = (dataAtual, latitude) =>{
    const anoAtual = dataAtual.getFullYear()
    const d1 = new Date(anoAtual, 5, 21)
    const d2 = new Date(anoAtual, 8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual, 2, 21)
    const sul = latitude < 0 
    if (dataAtual >= d1 && dataAtual <d2)
        return sul ? 'Inverno': 'Verão'
    if (dataAtual >= d2 && dataAtual <d3)
        return sul ? 'Primavera': 'Outono'
    if (dataAtual >= d3 || dataAtual <=d4)
        return sul ? 'Verão': 'Inverno'
    return sul ? 'Outono': 'Primavera'  
}

obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
     (posicao) => {
     const dataAtual = new Date()
     const estacaoClimatica = this.obterEstacao(dataAtual, posicao.coords.latitude);
     const nomeIcone = this.icones[estacaoClimatica]
        
    this.setState({
        latitude: posicao.coords.latitude,
        longitude: posicao.coords.longitude,
        estacao: estacaoClimatica,
        data: dataAtual,
        icone: nomeIcone
            } )
        },

    (erro) => {
        console.error("Geolocalização não tem suporte neste browser.");
    })

    //*if (navigator.geolocation) {
       // navigator.geolocation.getCurrentPosition((position) => {
          //  const latitude = position.coords.latitude;
          //  const longitude = position.coords.longitude;
          //  const dataAtual = new Date();
           // const estacao = this.obterEstacao(dataAtual, latitude);
           // const icone = this.icones[estacao];
           // this.setState({ latitude, longitude, estacao, data: dataAtual, icone });
       // });
   // } else {
   //     console.error("Geolocalização nãotem suporte neste browser.");
   // } 
}

render(){
    return <div>
    Estação
</div>
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)