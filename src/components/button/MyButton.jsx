import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import classNames from "classnames";
import { colors } from "../../utils";
import MyTxt from "../text/MyTxt";

export default function MyButton(props) {
  const cls =
    props.clsName ?? classNames("block py-3 rounded-lg", props.clsName);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...props}>
      <View
        className={cls}
        style={{
          backgroundColor: isPressed
            ? colors.primary.dark
            : colors.primary.main,
        }}>
        <MyTxt clsName='text-white text-center text-base'>{props.label}</MyTxt>
      </View>
    </TouchableWithoutFeedback>
  );
}
