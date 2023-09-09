import React from 'react'
import {Image} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import Welcome from '../sreens/Welcome'
import Browse from '../sreens/Browse'
import Login from '../sreens/Login'
import Explore from '../sreens/Explore'
import Product from '../sreens/Product'
import Settings from '../sreens/Settings'

import {theme} from '../constants/theme';

const screens = createStackNavigator({
    Welcome,
    Login,
    Explore,
    Browse,
    Product,
    Settings,
}, {
    defaultNavigationOptions: {
            headerStyle: {},
            headerBack: <Image />,
            headerBackTitle: null,
            headerLeftContainer: {},
            headerRightContainer: {},
    }
});

export default createAppContainer(screens);