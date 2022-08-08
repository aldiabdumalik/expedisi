import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  screenWidth,
  screenHeight,
  mainColor,
  colors,
} from "../../utils/index";
import {
  MyTxt,
  LabelForm,
  MyButton,
  FormGroup,
  Input,
  Header,
} from "../../components/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Waves1, Waves2, SvgConfirmPass } from "../../assets/svg/index";
import AuthStyle from "./AuthStyle";
import { StatusBarHeight } from "../../utils/StatusBarHeight";

const ForgotPassword = ({ navigation }) => {
  return (
    <View className='flex flex-col flex-1 w-full bg-white'>
      <KeyboardAvoidingView>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          bounces={false}>
          <Header onPress={() => navigation.navigate("Login")} />
          <View className='flex flex-col px-4 py-5'>
            <FormGroup label='Email'>
              <Input placeholder='Email Anda' autoComplete='off' />
            </FormGroup>
            <FormGroup>
              <MyButton
                label='Kirim'
                onPress={() => navigation.navigate("ModalConfirm")}
              />
            </FormGroup>
          </View>
          <StatusBar style='dark' />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create(AuthStyle);
