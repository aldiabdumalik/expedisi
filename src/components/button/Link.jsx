import { TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils";
import MyTxt from "../text/MyTxt";

const Link = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...props}>
      <MyTxt
        clsName='text-sm font-semibold'
        style={{
          color: isPressed ? colors.primary.dark : colors.primary.main,
        }}>
        {props.label}
      </MyTxt>
    </TouchableWithoutFeedback>
  );
};

export default Link;
