import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
export default function LoginScreen({ navigation }) {
  // useState
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [passCheckBox, setPassCheckBox] = useState(true);
  const [LoginLoading, setLoginLoading] = useState(false);
  // defined function
  const handleChange = (event) => {
    const name = event.name;
    const value = event.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const login = async () => {
    console.log(inputs);
    if (inputs.username === "0" && inputs.password === "0") {
      setLoginLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoginLoading(false);
      // resetting the current page

      // props.navigation.navigate("Home");
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "Home" }],
      // });
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
      // navigation.navigate("Home");
    } else {
      Alert.alert("Wrong input", "The username or password is incorrect.");
    }
  };

  const togglePassView = () => {
    setPassCheckBox(!passCheckBox);
  };
  return (
    <View className="flex-1 items-center justify-center bg-slate-50">
      <View className="p-8 w-full max-w-sm">
        <Text className="text-5xl font-bold mb-6 text-slate-900">Login</Text>

        <TextInput
          className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4"
          placeholderTextColor="#000"
          placeholder="Enter username"
          onChangeText={(text) =>
            handleChange({ name: "username", value: text })
          }
        />

        <TextInput
          className="w-full bg-white border border-slate-200 rounded-md h-12 px-4"
          placeholderTextColor="#000"
          placeholder="Enter password"
          secureTextEntry={passCheckBox}
          onChangeText={(text) =>
            handleChange({ name: "password", value: text })
          }
        />

        <View className="flex flex-row justify-between items-center my-8">
          <View className="flex-row items-center">
            <Pressable
              onPress={togglePassView}
              className="bg-white border border-slate-200 h-6 w-6 rounded-sm mr-2 flex items-center justify-center"
            >
              <View
                className={[
                  "w-4 h-4 rounded-sm",
                  passCheckBox ? "" : "bg-black",
                ].join(" ")}
              />
            </Pressable>
            <Text className="text-slate-900">Show password</Text>
          </View>
          <Pressable>
            <Text className="text-blue-400 font-bold">Reset password</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={login}
          className="h-12 bg-black rounded-md flex flex-row justify-center items-center px-6"
        >
          <View className="flex-1 items-center">
            {LoginLoading ? (
              <ActivityIndicator size={"large"} color={"#ffffff"} />
            ) : (
              <Text className="text-white text-base font-medium">Login</Text>
            )}
          </View>
        </Pressable>
      </View>
    </View>
  );
}
