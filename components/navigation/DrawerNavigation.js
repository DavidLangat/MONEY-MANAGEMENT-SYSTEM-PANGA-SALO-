// HamburgerMenu.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Transactions from "../../screens/Transactions";


import HomePage from '../../screens/HomePage';
import Income from '../../screens/Income';
import Advisor from '../../screens/Advisor';
import Education from "../../screens/Education";

import TrackGoals from '../../screens/TrackGoals';
import AdminEducation from '../../screens/AdminEducation';
import AdminAdvisor from '../../screens/AdminAdvisor';




const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
  
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage}/>
        <Drawer.Screen name="Income" component={Income}  />
        <Drawer.Screen name="TrackGoals" component={TrackGoals} />
        <Drawer.Screen name="Education" component={Education} />
        <Drawer.Screen name="Advisor" component={Advisor} />
        <Drawer.Screen name="AdminEducation" component={AdminEducation} />
        <Drawer.Screen name="AdminAdvisor" component={AdminAdvisor} />
      </Drawer.Navigator>
    
  );
};

export default DrawerNavigation;
