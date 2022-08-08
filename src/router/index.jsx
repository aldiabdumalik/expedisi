import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ForgotPassword,
  Login,
  ModalConfirm,
  Register,
  ResetPassword,
} from "../pages/auth/";
import { MyTxt } from "../components";
import { colors } from "../utils";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Group>
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
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name='ModalConfirm'
          component={ModalConfirm}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Router;
