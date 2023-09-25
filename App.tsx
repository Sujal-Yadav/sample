import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForumPage from "./app/screens/ForumPage";
import ProfilePage from "./app/screens/ProfilePage";
import EventsPage from "./app/screens/EventsPage";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import BasePage from "./app/screens/BasePage";
import SurveyPage from "./app/screens/SurveyPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name="Forum Page" component={ForumPage} options={{ headerShown: true }}></Tab.Screen>
      <Tab.Screen name="Events Page" component={EventsPage} options={{ headerShown: true }}></Tab.Screen>
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
