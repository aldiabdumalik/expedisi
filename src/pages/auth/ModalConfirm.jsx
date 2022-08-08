import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgConfirmPass } from "../../assets/svg/index";
import { colors } from "../../utils/index";
import { MyButton, MyTxt } from "../../components/index";

export default function ModalConfirm({ navigation }) {
  return (
    <View
      className='flex flex-col w-full h-screen items-center justify-center px-4'
      style={{ backgroundColor: colors.background }}>
      <View className='flex mb-6'>
        <SvgConfirmPass />
      </View>
      <View className='mb-6'>
        <MyTxt
          clsName='text-lg font-bold text-center mb-2'
          style={{ color: colors.neutral.primary }}>
          Email Reset Password Terkirim!
        </MyTxt>
        <MyTxt
          clsName='text-base font-normal text-center'
          style={{ color: colors.neutral.secondary }}>
          Cek email Anda dan klik link reset password untuk membuat password
          baru
        </MyTxt>
      </View>
      <View className=''>
        <MyButton
          label='Kembali'
          clsName='py-2 px-3 rounded-lg'
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
