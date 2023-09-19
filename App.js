const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";



import ProfileActive from "./components/ProfileActive";

import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding21 from "./screens/Onboarding21";
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import SignUp1 from "./screens/SignUp1";
import SignIn from "./screens/SignIn";
import Otp from "./screens/Otp";
import OtpVerification1 from "./screens/OtpVerification2";
import OtpVerification2 from "./screens/OtpVerification1";
import Profile1 from "./screens/Profile1";
import ProfileCompleted from "./screens/ProfileCompleted";
import HomePage from "./screens/HomePage";
import Cards from "./screens/Cards";
import Menu from "./screens/Menu";
import TransactionsDetail from "./screens/TransactionsDetail";
import Transactions from "./screens/Transactions";
import Transfer from "./screens/Transfer";
import Confirmation from "./screens/Confirmation";
import Notification1 from "./screens/Notification1";
import Profile from "./screens/Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          
           
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
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="OtpVerification1"
              component={OtpVerification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OtpVerification2"
              component={OtpVerification2}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
                <Stack.Screen
              name="ProfileCompleted"
              component={ProfileCompleted}
              options={{ headerShown: false }}
            />
           <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Cards"
              component={Cards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
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
             <Stack.Screen
              name="Transfer"
              component={Transfer}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
           
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
