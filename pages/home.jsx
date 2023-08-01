import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
import { Skeleton } from "@rneui/themed";
import { searchBarPlaceholderText } from "../utils/texts/texts";
import { getAllBus } from "../utils/hygraph/connect";
// import { LinearGradient } from "expo-linear-gradient";
const Home = () => {
  const [search, setSearch] = useState("");
  const [Buses, setBuses] = useState([]);

  useEffect(() => {
    getBus();
  }, []);

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
      <View className="flex">
        <View>
          <SearchBar
            showLoading={false}
            className="rounded-lg"
            round
            // searchIcon={() => (
            //   <View>
            //     <Text>Hii</Text>
            //   </View>
            // )}
            searchIcon={{ size: 25 }}
            onChangeText={(text) => {
              setSearch(text);
            }}
            onClear={(text) => {
              setSearch("");
            }}
            placeholder={searchBarPlaceholderText}
            value={search}
          />
        </View>

        <View className="justify-center items-center space-y-6 mt-6 mb-48">
          <FlatList
            className="w-[99%]"
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
  console.log("PROPS:", props);
  const { active, startTime, endTime, vehicleNo, vendor, id, routes } = props;
  return (
    <View className="flex bg-slate-300 m-1 rounded-md">
      <Text>{vehicleNo}</Text>
      <Text>{active ? "Active" : "Not Active"}</Text>
      <Text>{new Date(startTime).toLocaleTimeString()}</Text>
      <Text>{new Date(endTime).toLocaleTimeString()}</Text>
      <Text>{vendor}</Text>
      <Text>{id}</Text>
      {routes.flatMap((d) => {
        return (
          <View key={d?.id}>
            <Text>{d?.route}</Text>
          </View>
        );
      })}
    </View>
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
