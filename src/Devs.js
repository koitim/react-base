import React from 'react';
import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';
import axios from 'axios';

const API_URL = 'http://localhost:3004/estorias/'

export default class Devs extends React.Component {

 render () {
     return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="header center orange-text">Desenvolvedores</h1>
                <h3>N desenvolvedores</h3>
            </div>
        </div>);
    } 
}