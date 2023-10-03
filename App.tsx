import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForumPage from "./app/screens/ForumPage";
import ProfilePage from "./app/screens/ProfilePage";
import EventsPage from "./app/screens/EventsPage";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import React, { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import BasePage from "./app/screens/BasePage";
import SurveyPage from "./app/screens/SurveyPage";
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export function MyTabs() {
  function solid(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Forum" component={ForumPage} options={{
        tabBarLabel: 'Forum',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="comments" size={size} color={color} /> // Use FontAwesome icon
        ),
      }}></Tab.Screen>
      <Tab.Screen name="Events" component={EventsPage} options={{
        tabBarLabel: 'Events',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="calendar" size={size} color={color} /> // Use FontAwesome icon
        ),
      }}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfilePage} options={{
        tabBarLabel: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={size} color={color} /> // Use FontAwesome icon
        ),
      }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'BasePage' : 'BasePage'}>
        {user ? (
          <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: true }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
            <Stack.Screen name="BasePage" component={BasePage} options={{ headerShown: false }} />
            <Stack.Screen name="SurveyPage" component={SurveyPage} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
