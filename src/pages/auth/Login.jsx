import { View, StyleSheet } from "react-native";
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
  Link,
} from "../../components/index";
import { Waves1, Waves2 } from "../../assets/svg/index";
import AuthStyle from "./AuthStyle";

const Login = ({ navigation }) => {
  return (
    <View className='flex flex-col h-screen w-full bg-white'>
      <View
        className='flex flex-col w-full rounded-b-2xl'
        style={styles.header}>
        <View className='flex flex-col w-full h-20 relative items-center justify-center'>
          <Waves1 style={styles.svgStyle} />
          <Waves2 style={styles.svgStyle} />
        </View>
        <View className='w-full flex flex-col items-center relative mt-4'>
          <MyTxt clsName='text-white text-welcome font-normal text-sm'>
            Selamat Datang di Aplikasi
          </MyTxt>
          <MyTxt clsName='text-white text-company font-bold text-2xl'>
            Expedisi
          </MyTxt>
        </View>
      </View>
      <View
        className='flex flex-col justify-center items-center'
        style={styles.formContainer}>
        <View className='flex flex-col bg-white' style={styles.formBox}>
          <MyTxt
            clsName='text-company font-bold text-xl text-center'
            style={[styles.title]}>
            Masuk
          </MyTxt>
          <View className='px-2'>
            <FormGroup label='Email'>
              <Input placeholder='Email Anda' autoComplete='off' />
            </FormGroup>
            <FormGroup label='Password'>
              <Input placeholder='Password' autoComplete='off' password />
            </FormGroup>
            <View
              className='flex flex-col items-end'
              style={[styles.formControl]}>
              <Link
                label='Lupa Password?'
                onPress={() => navigation.navigate("Register")}
              />
            </View>
            <View className='flex flex-col' style={[styles.formControl]}>
              <MyButton label='Masuk' onPress={() => alert()} />
            </View>
            <View className='flex flex-row items-center justify-center'>
              <MyTxt clsName='text-sm mr-1'>Belum memiliki akun?</MyTxt>
              <Link
                label='Daftar disini'
                onPress={() => navigation.navigate("Register")}
              />
            </View>
          </View>
        </View>
      </View>
      <StatusBar style='light' />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create(AuthStyle);
