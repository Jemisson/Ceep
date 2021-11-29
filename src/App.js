import React, { Component } from "react"
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import "./assets/App.css"
import './assets/index.css'

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    }
  }

  apagarNota(){
    console.log('jkdsfjkds');
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)

  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas
          apagarNota={this.apagarNota.bind(this)}
          notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
