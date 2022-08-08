import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils/index";
import Ionicons from "@expo/vector-icons/Ionicons";

const Input = (props) => {
  const [hidePassword, setHidePassword] = useState(props.password);
  const [isFocused, setIsFocused] = useState(false);
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <View
      className='flex flex-row bg-white px-4 py-3 mt-1 rounded-lg items-center'
      style={{
        borderColor: props.error
          ? colors.error.main
          : isFocused
          ? colors.primary.main
          : colors.gray.divider,
        borderWidth: props.error ? 2 : 1,
      }}>
      <TextInput
        style={[styles.input]}
        autoCorrect={false}
        secureTextEntry={hidePassword}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        {...props}
        placeholderTextColor={colors.gray.placeholder}
        selectionColor={colors.neutral.secondary}
        onChange={() => handleInputChange}
      />
      {props.password && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "ios-eye" : "ios-eye-off"}
            style={{ color: colors.neutral.caption, fontSize: 22 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Nunito",
    color: colors.neutral.primary,
  },
});
