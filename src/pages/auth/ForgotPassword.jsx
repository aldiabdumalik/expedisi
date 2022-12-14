import { View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { screenWidth, screenHeight, mainColor, colors } from '../../utils/index';
import { MyTxt, LabelForm, MyButton, FormGroup, Input } from '../../components/index'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Waves1, Waves2 } from '../../assets/svg/index'
import AuthStyle from './AuthStyle';

const ForgotPassword = () => {
  return (
    <View className="flex flex-col flex-1 w-full bg-white">
      <KeyboardAvoidingView>
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }} alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          bounces={false}>
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
          <View className="flex flex-col justify-center items-center w-full h-auto mb-8">
            <View className="flex flex-col bg-white" style={styles.formWidth}>
              <MyTxt clsName="text-company font-bold text-xl text-center my-8" style={[styles.title]}>Daftar Akun</MyTxt>
              <View className="px-2">
                <FormGroup label="Email">
                  <Input placeholder="Email Anda" />
                </FormGroup>
                <FormGroup label="Password">
                  <Input placeholder="Password" password />
                </FormGroup>
                <FormGroup>
                  <MyTxt clsName="text-sm font-normal" style={{ color: colors.neutral.main }}>
                    Minimal 8 karakter dengan kombinasi angka dan huruf
                  </MyTxt>
                </FormGroup>
                <FormGroup label="Konfirmasi Password">
                  <Input placeholder="Password" password />
                </FormGroup>
                <FormGroup label="Kode Referral (Optional)">
                  <Input placeholder="Referral" />
                </FormGroup>
                <View className="flex flex-col" style={[styles.formControl]}>
                  <MyButton clsName="block py-3 rounded-lg" onPress={() => alert()} style={{backgroundColor: mainColor}}>
                    <MyTxt clsName="text-white text-center text-base">Daftar</MyTxt>
                  </MyButton>
                </View>
                <View className="flex flex-row gap-1 items-center justify-center">
                  <MyTxt clsName="text-sm">Sudah memiliki akun?</MyTxt>
                  <TouchableOpacity>
                    <MyTxt clsName="text-sm font-semibold" style={{color: mainColor}}>Masuk disini</MyTxt>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <StatusBar style="light" />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create(AuthStyle)