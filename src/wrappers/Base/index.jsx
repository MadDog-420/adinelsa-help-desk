import React, { useState } from 'react';
import { isNull } from '../../utils/tools';
import CustomLayout from '../Layout';

const baseStates = {
    loading: () => null,
    component: (props) => (<CustomLayout {...props} />),
  };

function Base() {
    const [base] = useState('component');
    const accessToken = localStorage.getItem('authToken');
    const [login, setLoginState] = useState(!isNull(accessToken) ? accessToken : '');
    const [groups, setGroups] = useState();

    const componentProps = {
        login,
        setLoginState,
        groups,
        setGroups,
    };

    return (baseStates[base](componentProps));
}

export default Base;