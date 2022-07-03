import React, { useState } from 'react';
import { isNull } from '../../utils/tools';
import CustomLayout from '../Layout';
import { getAuthTokenName } from './../../utils/tools';

const baseStates = {
  loading: () => null,
  component: (props) => (<CustomLayout {...props} />),
};

function Base() {
    const [base] = useState('component');
    const accessToken = localStorage.getItem(getAuthTokenName());
    const [isLogin, setLoginState] = useState(!isNull(accessToken) && accessToken !== '');
    const [groups, setGroups] = useState();

    const componentProps = {
        isLogin,
        setLoginState,
        groups,
        setGroups,
    };

    return (baseStates[base](componentProps));
}

export default Base;