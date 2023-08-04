import { View } from "react-native";
const { Skeleton } = require("@rneui/themed");

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

export default SkeletonBox;
