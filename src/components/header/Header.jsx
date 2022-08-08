import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { StatusBarHeight } from "../../utils/StatusBarHeight";
import MyTxt from "../text/MyTxt";
import { colors } from "../../utils";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = (props) => {
  return (
    <View
      style={{
        overflow: "hidden",
        paddingBottom: 5,
        marginTop: StatusBarHeight,
      }}>
      <View
        className='flex flex-row w-full h-16 bg-white px-4 items-center'
        style={[styles.boxShadow]}>
        <TouchableWithoutFeedback {...props}>
          <Ionicons
            name='arrow-back'
            style={{ color: colors.neutral.primary, fontSize: 24 }}
          />
        </TouchableWithoutFeedback>
        <MyTxt
          clsName='text-lg font-bold ml-3'
          style={{ color: colors.neutral.primary }}>
          Lupa Password
        </MyTxt>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  boxShadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 5,
  },
});
