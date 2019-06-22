import React from 'react';
import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';

export default class Taskboard extends React.Component {

    constructor() {
        super();
        this.state = {
            estorias: [
                {
                    id: 1,
                    titulo: "Contratar Seguro",
                    texto: "Como usuário, gostaria de contratar um seguro.",
                    pontos: 10
                },
                {
                    id: 2,
                    titulo: "Cancelar Seguro",
                    texto: "Como usuário, gostaria de cancelar um seguro.",
                    pontos: 20
                },
                {
                    id: 3,
                    titulo: "Poim poim",
                    texto: "Blablabla Blablabla Blablabla .",
                    pontos: 5
                }
            ]
        };
    }

    _adicionarEstoria = (titulo, pontos, descricao) => {
        const estoria = {
            titulo,
            descricao,
            pontos,
            id: this.state.estorias.length + 1
        }
        this.setState({estorias: this.state.estorias.concat([estoria])});
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
                <EstoriaForm adicionarEstoria={this._adicionarEstoria}/>
            </div>
        </div>);
    } 

    _getEstorias() {
        return this.state.estorias.map( estoria =>
            <Estoria
                titulo={estoria.titulo}
                texto={estoria.texto}
                pontos={estoria.pontos}
                key={estoria.id}
            />);
    }
}