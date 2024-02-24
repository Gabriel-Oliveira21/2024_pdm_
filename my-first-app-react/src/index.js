import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
    const iamClicked =() => {
        alert('I am cliked =)')
    }
    return(
       <div style={{margin: 'auto', width: 768, backgroundColor:'#EEE', padding: 12, borderRadius: 8}}>
        <label htmlFor='nome'style={{display: 'block', marginBottom:4}}>Nome</label>
        <input type='text' id='nome' style={{paddingTop:8, paddingBottom:8,
             borderStyle: 'hidden', width:'100%', borderRadius:8, outline: 'none', boxSizing: 'border-box'}}></input>
        <button style={{marginTop: 12, paddingTop:8, paddingBottom:8, 
            backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%',borderRadius:8}}
            onClick={iamClicked}>Enviar</button>
       </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);