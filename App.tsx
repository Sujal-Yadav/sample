import SignUpPage from "./app/screens/SignUp";
import LogInPage from "./app/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasePage from "./app/screens/BasePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForumPage from "./app/screens/ForumPage";
import ProfilePage from "./app/screens/ProfilePage";
import EventsPage from "./app/screens/EventsPage";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MyTabs = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="ForumPage" component={ForumPage} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name="EventsPage" component={EventsPage} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }}></Tab.Screen>
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

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="BasePage">
    //     {/* <Stack.Screen name="Main Page" component={BasePage} /> */}

    //     {user ? <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} /> : <Stack.Screen name="SignUp" component={BasePage} options={{ headerShown: true }} />}
    //     {/* <Stack.Screen name="SignUp" options={{ headerShown: true }} component={SignUp} /> */}
    //     {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <ProfilePage/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'SignUp'}>
        {user ? (
          <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: true }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>


  );
}
