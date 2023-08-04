import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { T1 } from "../utils/texts/texts";
import { Image } from "react-native";

const SearchBarComp = (props) => {
  const [search, setSearch] = useState("");
  return (
    <SearchBar
      onEndEditing={() => props.searchInput(search)}
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
        // props.searchInput(text);
      }}
      onClear={(text) => {
        setSearch("");
        // props.searchInput(text);
      }}
      placeholder={T1}
      value={search}
      containerStyle={{
        backgroundColor: "white",
        padding: 20,
        borderColor: "white",
      }}
      inputContainerStyle={{ backgroundColor: "#eee", height: 60 }}
      inputStyle={{ color: "black" }}
    />
  );
};

export default SearchBarComp;
