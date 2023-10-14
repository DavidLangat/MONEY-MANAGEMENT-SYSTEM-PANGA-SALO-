import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';


import ProfileActive from "./components/ProfileActive";

import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding21 from "./screens/Onboarding21";
import Welcome from "./screens/Welcome";

import SignUp1 from "./screens/SignUp1";
import SignIn from "./screens/SignIn";
import HomePage from "./screens/HomePage";
import Menu from "./screens/Menu";
import TransactionsDetail from "./screens/TransactionsDetail";
import Transactions from "./screens/Transactions";
import Notification1 from "./screens/Notification1";
import Profile from "./screens/Profile";
import Expense from "./screens/Expense";
import Reports from "./screens/Reports";
import TrackGoals from "./screens/TrackGoals";
import Education from "./screens/Education";
import Advisor from "./screens/Advisor"


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Income from "./screens/Income";
import { LoginStackNavigator } from "./components/navigation/StackNavigator";

const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      {/* <NavigationContainer>
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
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
        
             
           <Stack.Screen
              name="HomePage"
              component={HomePage}
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
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Expense"
              component={Expense}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Reports"
              component={Reports}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Income"
              component={Income}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="TrackGoals"
              component={TrackGoals}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Education"
              component={Education}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Advisor"
              component={Advisor}
              options={{ headerShown: false }}
            />

            
            
           
          </Stack.Navigator>
        ) : null}
      </NavigationContainer> */}
      <NavigationContainer  >

        <LoginStackNavigator />
      </NavigationContainer>
    </>
  );
};
export default App;
