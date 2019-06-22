import React from 'react';
import { connect } from 'react-redux';
import * as devActions from './actions/devActions';

const INITIAL_STATE = {
    nome: ""
}

class Devs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dev: INITIAL_STATE
        }
    }

    onNameChange = event => {
        const dev = { ...this.state.dev };
        dev.nome = event.target.value;
        this.setState({ dev });
    }

    onClickSave = event => {
        //alert(`Salvando ${this.state.dev.nome}`);
        this.props.dispatch(devActions.createDev(this.state.dev));
        this.setState({...this.state.dev.nome, ...INITIAL_STATE});
    }

    devRow = (dev, index) => {
        return <div key={index}>{dev.nome}</div>;
    };

    render() {
        return (
            <div className="container">
                <h1>Desenvolvedores</h1>
                {this.props.devs.map(this.devRow)}
                <input type="text"
                    onChange={this.onNameChange}
                    value={this.state.dev.nome} />
                <input type="submit"
                    value="Salvar"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        devs: state.devs
    };
}

export default connect(mapStateToProps)(Devs);