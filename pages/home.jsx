import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Skeleton, SearchBar } from "@rneui/themed";
import { searchBarPlaceholderText, beginsEnds } from "../utils/texts/texts";
import { getAllBus } from "../utils/hygraph/connect";
import socketServices from "../utils/socket/socketService";
import { Image } from "react-native";
// import { SearchBar } from "react-native-elements";
// import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const [search, setSearch] = useState("");
  const [Buses, setBuses] = useState([]);
  const [socketData, setSocketData] = useState("");

  useEffect(() => {
    // socketServices.initializeSocket();
    getBus();
  }, []);

  useEffect(() => {});

  // defined functions

  const getBus = () => {
    getAllBus()
      .then(({ buses }) => {
        setBuses(buses);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // end defined functions
  return (
    <SafeAreaView>
      <View className="flex bg-white">
        <View>
          <SearchBar
            lightTheme={true}
            showLoading={false}
            className="rounded-lg"
            round
            searchIcon={() => (
              <Image
                className="w-8 h-8"
                source={require("../assets/icons/marker.png")}
              />
            )}
            // searchIcon={{ size: 30, color: "black" }}
            onChangeText={(text) => {
              setSearch(text);
            }}
            onClear={(text) => {
              setSearch("");
            }}
            placeholder={searchBarPlaceholderText}
            value={search}
            containerStyle={{
              backgroundColor: "white",
              padding: 20,
              borderColor: "white",
            }}
            inputContainerStyle={{ backgroundColor: "#eee", height: 60 }}
            inputStyle={{ color: "black" }}
          />
        </View>

        <View className="justify-center items-center space-y-6 mt-6 mb-48">
          <FlatList
            className="w-[90%]"
            data={Buses}
            ListEmptyComponent={<SkeletonBox />}
            renderItem={({ item }) => <BusRowCard props={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const BusRowCard = ({ props }) => {
  const { active, startTime, endTime, vehicleNo, vendor, id, routes } = props;

  const convertToTime = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formattedDate;
  };

  return (
    <TouchableOpacity>
      <View className="flex bg-slate-100 m-1 mb-4 rounded-md shadow-sm shadow-black">
        <View className="flex-row justify-between items-center p-3">
          <Image
            className="w-16 h-16"
            source={require("../assets/icons/school-bus.png")}
          />
          <View className="bg-yellow-300 h-9 p-2 rounded-lg min-w-[30%] shadow-sm shadow-black">
            <Text className="text-md font-bold text-center">{vehicleNo}</Text>
          </View>
        </View>
        <View className="flex-col p-2 pl-4 pr-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="font-bold">{beginsEnds[0]}</Text>
            <Skeleton
              width={100}
              height={5}
              style={{ borderRadius: 40 }}
            ></Skeleton>
            <Text className="font-bold">{beginsEnds[1]}</Text>
          </View>
          {routes.flatMap((d) => {
            return (
              <View className="flex-row justify-between" key={d?.id}>
                <Text>{d?.route?.split("-")[0]}</Text>
                <Text>{d?.route?.split("-")[1]}</Text>
              </View>
            );
          })}
        </View>
        <View>
          <View className="justify-between items-center flex-row p-2 pl-4 pr-4">
            <Text>{convertToTime(startTime)}</Text>
            <Text>{convertToTime(endTime)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SkeletonBox = () => {
  const demoArray = [...Array(7).keys()].map((x) => x * 2);
  return (
    <View className="justify-center items-center space-y-5">
      {demoArray.flatMap((index) => {
        return (
          <Skeleton
            key={index}
            LinearGradientComponent={() => (
              <View className="rotate-12">
                <View className="w-16 h-52 bg-slate-200"></View>
              </View>
            )}
            animation="wave"
            width={"95%"}
            height={80}
          />
        );
      })}
    </View>
  );
};

export default Home;
