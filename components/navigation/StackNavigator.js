import React from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transactions from "../../screens/Transactions";
import TransactionsDetail from "../../screens/TransactionsDetail";
import Profile from "../../screens/Profile";
import BottomTabNavigator from "./TabNavigator";
import SignUp from "../../screens/SignUp1";
import SignIn from "../../screens/SignIn";
import Welcome from "../../screens/Welcome";
import Onboarding2 from "../../screens/Onboarding2";
import Onboarding21 from "../../screens/Onboarding21";
import Onboarding1 from "../../screens/Onboarding1";
import HomePage from "../../screens/HomePage";
import MyDrawer from "./DrawerNavigation";
import DrawerNavigation from "./DrawerNavigation";


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
  },
  headerShown: false,
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={"HomeScreen"} >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Menu" component={DrawerNavigation}  />

      <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="TransactionsDetail"
              component={TransactionsDetail}
              options={{ headerShown: false }}
            />
           
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle} initialRouteName={"FirstScreen"}>
                  {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
                  <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Onboarding21"
              component={Onboarding21}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            
             <Stack.Screen
              name="SignUp1"
              component={SignUp}
              options={{ headerShown: false }}
            />
        
             
           <Stack.Screen
              name="HomePage1"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
           
      <Stack.Screen name="Main" component={BottomTabNavigator} />



    </Stack.Navigator>
  );
}

export { MainStackNavigator, LoginStackNavigator };