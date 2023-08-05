import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeIcon from "../assets/icons/home.png";
import userIcon from "../assets/icons/user.png";
import { Image } from "react-native";
import { useState } from "react";
import Home from "../pages/home";
const Tab = createBottomTabNavigator();
export default function Initiate() {
  const [IsAuth, setIsAuth] = useState(false);

  return (
    <>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Image
                  source={homeIcon}
                  style={{ tintColor: focused ? "#000" : "#DDE1D7" }}
                  className="w-10 h-10"
                />
              );
            } else if (route.name === "Profile") {
              return <Image source={userIcon} />;
            }
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            paddingTop: 5,
            marginBottom: 0,
            height: 60,
          },
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Tab.Navigator>
    </>
  );
}

// tabBarStyle: { display: "none" },
// tabBarButton: () => null,
