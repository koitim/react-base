import React from 'react';

export default class Estoria extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exibirEstoria: false
        }
    }

    _handleClick = (e) => {
        e.preventDefault();
        this.setState({
            exibirEstoria: !this.state.exibirEstoria
        });
    };

    _handleDelete = (e) => {
        e.preventDefault();
        this.props.onDelete(this.props.estoria.id);
    };

 render () {
    let estoria = this.props.estoria;
     let descricao;
     let pontos;
     let textoBotao = "Exibir Estoria";
     if (this.state.exibirEstoria) {
         descricao = estoria.descricao;
        pontos = estoria.pontos + " pontos";
        textoBotao = "Ocultar Estória";
     }
     return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card indigo darken-3">
                    <div className="card-content white-text"> 
                        <span className="card-title">{estoria.titulo}</span>
                        <p>{descricao}
                            <span className="badge white">{pontos}</span></p>
                    </div>
                    <div className="card-action">
                        <a className="right" href="#" onClick={this._handleClick}>{textoBotao}</a>
                        <a className="right" href="#" onClick={this._handleDelete}>Excluir</a>
                        <br/>
                    </div>
                </div>
            </div>
        </div>);
    } 
}