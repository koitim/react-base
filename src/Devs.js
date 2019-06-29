import React from 'react';
import { connect } from 'react-redux';
import * as devActions from './actions/devActions';
import { bindActionCreators } from 'redux';
import DevList from './DevList';
import {Link} from 'react-router-dom';


class Devs extends React.Component {

    devRow = (dev, index) => {
        return <div key={index}>{dev.nome}</div>;
    };

    render() {
        return (
            <div className="container">
                <h1>Desenvolvedores</h1>
                <Link to='/dev' className='btn'>+1 Dev</Link>
                <DevList devs={this.props.devs} />
                <br/><br/>
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