import React from 'react';

const INITIAL_STATE = {
    titulo: "", pontos: 0, descricao: ""
}

export default class EstoriaForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    _handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    _handleSubmit = e => {
        e.preventDefault();
        const {titulo, pontos, descricao} = {...this.state};
        this.props.adicionarEstoria(titulo, pontos, descricao);
        this.setState({...this.state, ...INITIAL_STATE});
    };

    render () {
        const {titulo, pontos, descricao} = this.state;
        return (
           <div className="row">
               <form className="col s12" onSubmit={this._handleSubmit}>
                   <h5>+1 Estória</h5>
                   <div className="input-field col s12">
                       <input
                            placeholder="Titulo"
                            name="titulo"
                            value={titulo}
                            onChange={this._handleChange}/><br/>
                       <input placeholder="Pontos"
                            name="pontos"
                            value={pontos}
                            onChange={this._handleChange}/><br/>
                       <textarea placeholder="Descrição" className="materialize-textarea"
                            name="descricao"
                            value={descricao}
                            onChange={this._handleChange}></textarea>
                       <button className="btn waves-effect waves-light" type="submit">Enviar</button>
                   </div>
               </form>
           </div>
        );
    } 
}