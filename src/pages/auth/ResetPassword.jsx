import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../utils/index";
import { MyTxt, MyButton, FormGroup, Input } from "../../components/index";
import AuthStyle from "./AuthStyle";

const ResetPassword = ({ navigation }) => {
  return (
    <View
      className='flex flex-col flex-1 w-full'
      style={{ backgroundColor: colors.background }}>
      <KeyboardAvoidingView>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          bounces={false}>
          <View className='flex flex-col justify-center items-center w-full h-auto mb-8 pt-20'>
            <View
              className='flex flex-col'
              style={[{ backgroundColor: colors.background }]}>
              <MyTxt
                clsName='text-company font-bold text-xl text-center mb-8'
                style={[styles.title]}>
                Reset Password
              </MyTxt>
              <View className='px-4'>
                <FormGroup label='Password'>
                  <Input placeholder='Password' password />
                </FormGroup>
                <FormGroup>
                  <MyTxt
                    clsName='text-sm font-normal'
                    style={{ color: colors.neutral.caption }}>
                    Minimal 8 karakter dengan kombinasi angka dan huruf
                  </MyTxt>
                </FormGroup>
                <FormGroup label='Konfirmasi Password'>
                  <Input placeholder='Password' password />
                </FormGroup>
                <View className='flex flex-col' style={[styles.formControl]}>
                  <MyButton label='Simpan' onPress={() => alert()} />
                </View>
              </View>
            </View>
          </View>
          <StatusBar style='light' />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create(AuthStyle);
