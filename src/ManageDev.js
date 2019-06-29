import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createDev} from './actions/devActions'
import DevForm from './DevForm';


class MnageDev extends Component {

    render() {
        return (
            <div className="container">
                <h1>Gerenciar Desenvolvedor</h1>
                <DevForm onSubmit={this.props.createDev}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createDev}, dispatch)
}

export default connect(null, mapDispatchToProps)(MnageDev);