import React from 'react';
import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';
import axios from 'axios';

const API_URL = 'http://localhost:3004/estorias/'

export default class Taskboard extends React.Component {

    constructor() {
        super();
        this.state = {
            estorias: []
        };
    }

    componentDidMount() {
        this._buscarEstorias();
    }

    _adicionarEstoria = (estoria) => {
        axios.post(API_URL, estoria)
            .then(response => this._buscarEstorias());
    }

    _excluirEstoria = (id) => {
        console.log(id);
        axios.delete(API_URL + id)
            .then(response => this._buscarEstorias());
    }

 render () {
     let estorias = this._getEstorias();
     let quantidadeEstorias = estorias.length;
     return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="header center orange-text">Estórias</h1>
                <h3>{quantidadeEstorias} estórias</h3>
                {estorias}
                <EstoriaForm 
                    adicionarEstoria={this._adicionarEstoria}/>
            </div>
        </div>);
    } 

    _getEstorias() {
        return this.state.estorias.map( estoria =>
            <Estoria
                estoria={estoria}
                onDelete={this._excluirEstoria}
            />);
    }

    _buscarEstorias() {
        axios.get(API_URL)
            .then(response => {this.setState({estorias: response.data})});
    }

    
}