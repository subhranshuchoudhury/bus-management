import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllBus } from "../utils/hygraph/connect";
import BusRowCard from "../components/BusRowCard";
import SkeletonBox from "../components/SkeletonBox";
import SearchBarComp from "../components/SearchBar";
import socketServices from "../utils/socket/socketService";
import { T3 } from "../utils/texts/texts";

const Home = () => {
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

  const searchInput = (val) => {
    alert(val);
  };

  // end defined functions
  return (
    <SafeAreaView>
      <View className="flex bg-white">
        <View>
          <SearchBarComp searchInput={searchInput} />
        </View>
        <View className="ml-5 mt-5">
          <Text className="text-xl font-bold">{T3}</Text>
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

export default Home;
