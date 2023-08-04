import { Skeleton } from "@rneui/themed";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { T2 } from "../utils/texts/texts";

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
    <>
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
              <Text className="font-bold">{T2[0]}</Text>
              <Skeleton
                width={100}
                height={5}
                style={{ borderRadius: 40 }}
              ></Skeleton>
              <Text className="font-bold">{T2[1]}</Text>
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
    </>
  );
};

export default BusRowCard;
