import * as types from './actionTypes';
import Axios from 'axios';
import { reset as resetForm, initialize } from 'redux-form';
import { request } from 'https';
import { toastr } from 'react-redux-toastr';

const URL = 'http://localhost:3004/devs'

export function createDev(dev) {
    let method = 'put'
    let id = dev.id
    if (!dev.id) {
        dev.id = generateId(dev);
        method = 'post'
        id = ''
    }
    //return { type: types.CREATE_DEV, dev };
    return dispatch => {
        //Axios.post(URL, dev)
        Axios[method](`${URL}/${id}`, dev)
            .then(request => {
                toastr.success('Operação realizada com sucesso')
                dispatch(resetForm('devForm'));
                dispatch({ type: types.CREATE_DEV_SUCCESS })
            })
    }
}

function generateId(dev) {
    return dev.nome + '-' + dev.sobrenome
    //return toLowerCase(dev.nome) + '-' + toLowerCase(dev.sobrenome)
}

export function loadDevs() {
    return dispatch => {
        Axios.get(URL)
            .then(devs => {
                dispatch(loadDevsSuccess(devs.data))
            })
    };
}

export function loadDevsSuccess(devs) {
    return { type: types.LOAD_DEVS_SUCCESS, devs }
}

export function manageDev(redirect) {
    return {type: types.MANAGE_DEV, redirect}
}

export function loadDev(dev) {
    return dispatch => {
        dispatch(manageDev(false))
        dispatch(initialize('devForm', dev))
    }
}