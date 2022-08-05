import { View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { screenWidth, screenHeight, mainColor } from '../../utils/index';
import { MyTxt, LabelForm, MyButton, FormGroup, Input } from '../../components/index'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Waves1, Waves2 } from '../../assets/svg/index'
import AuthStyle from './AuthStyle';

const Login = () => {
  return (
    <View className="flex flex-col h-screen w-full bg-white">
      <View className="flex flex-col w-full rounded-b-2xl" style={styles.header}>
        <View className="flex flex-col w-full h-20 relative items-center justify-center">
          <Waves1 style={styles.svgStyle} />
          <Waves2 style={styles.svgStyle} />
        </View>
        <View className="w-full flex flex-col items-center relative mt-4">
          <MyTxt clsName="text-white text-welcome font-normal text-sm">Selamat Datang di Aplikasi</MyTxt>
          <MyTxt clsName="text-white text-company font-bold text-2xl">Expedisi</MyTxt>
        </View>
      </View>
      <View className="flex flex-col justify-center items-center" style={styles.formContainer}>
        <View className="flex flex-col bg-white" style={styles.formBox}>
          <MyTxt clsName="text-company font-bold text-xl text-center" style={[styles.title]}>Masuk</MyTxt>
          <View className="px-2">
            <FormGroup label="Email">
              <Input placeholder="Email Anda" autoComplete="off" />
            </FormGroup>
            <FormGroup label="Password">
              <Input placeholder="Password" autoComplete="off" password />
            </FormGroup>
            <View className="flex flex-col" style={[styles.formControl]}>
              <TouchableWithoutFeedback>
                <MyTxt clsName="font-sm font-semibold text-right" style={{color: mainColor}}>Lupa Password?</MyTxt>
              </TouchableWithoutFeedback>
            </View>
            <View className="flex flex-col" style={[styles.formControl]}>
              <MyButton clsName="block py-3 rounded-lg" onPress={() => alert()} style={{backgroundColor: mainColor}}>
                <MyTxt clsName="text-white text-center text-base">Masuk</MyTxt>
              </MyButton>
            </View>
            <View className="flex flex-row gap-1 items-center justify-center">
              <MyTxt clsName="text-sm">Belum memiliki akun?</MyTxt>
              <TouchableOpacity>
                <MyTxt clsName="text-sm font-semibold" style={{color: mainColor}}>Daftar disini</MyTxt>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  )
}

export default Login

const styles = StyleSheet.create(AuthStyle)