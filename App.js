import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import "react-native-url-polyfill/auto"; // for encoding url : sanity.io
import Home from "./pages/home";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./pages/auth/login";
import Main from "./tabs/Main";

const Stack = createNativeStackNavigator();
export default function App() {
  // SplashScreen.preventAutoHideAsync();
  // setTimeout(SplashScreen.hideAsync, 3000);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
