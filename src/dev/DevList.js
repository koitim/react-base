import React from 'react';
import DevListRom from './DevListRow';

const DevList = ({devs}) => {
    return (
        <table>
            <thead>
                <tr><td>ID</td><td>Nome</td><td>Sobrenome</td><td>Ações</td></tr>
            </thead>
            <tbody>
                {devs.map(dev => <DevListRom key={dev.id} dev={dev}/>)}
            </tbody>
        </table>
    );
};

export default DevList;