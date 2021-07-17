import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';

const stackRoutes = createStackNavigator();

function StackRoutes() {
    return(
        <stackRoutes.Navigator
        headerMode='none'
    >
        <stackRoutes.Screen
            name='Login'
            component={Login}
        />

        <stackRoutes.Screen
            name='Confirmation'
            component={Confirmation}
        />

        <stackRoutes.Screen
            name='Home'
            component={Home}
        />        
    </stackRoutes.Navigator>
    );
}

export default StackRoutes;