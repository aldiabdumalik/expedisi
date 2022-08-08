import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPassword, Login, Register } from "../pages/auth/";
import { MyTxt } from "../components";
import { colors } from "../utils";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{
          headerTitle: () => (
            <MyTxt
              clsName='text-lg font-bold ml-3'
              style={{ color: colors.neutral.primary }}>
              Lupa Password
            </MyTxt>
          ),
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => alert()}>
              <Ionicons
                name='arrow-back'
                style={{ color: colors.neutral.primary, fontSize: 24 }}
              />
            </TouchableWithoutFeedback>
          ),
        }}
      /> */}
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
