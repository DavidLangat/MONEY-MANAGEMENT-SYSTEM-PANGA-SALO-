import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Expense from "../../screens/Expense";
import Reports from "../../screens/Reports";
import Notification1 from "../../screens/Notification1";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      activeColor={'blue'}
      inactiveColor={'black'}
      barStyle={{ backgroundColor: "#feffff" }}
      initialRouteName='HomePage'
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="HomePage" component={MainStackNavigator} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Expense',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bank" color={color} size={26} />
          ),
        }}
        name="Expense" component={Expense} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph" color={color} size={26} />
          ),
        }}
        name="Reports" component={Reports} />

      <Tab.Screen
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
        }}
        name="Notification1" component={Notification1} />
    </Tab.Navigator>
  );
};
// 


export default BottomTabNavigator;