import { View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/index'
import LabelForm from '../text/LabelForm'
import MyTxt from '../text/MyTxt'

const FormGroup = (props) => {
  return (
    <View className="flex flex-col mb-5">
        {props.label && <LabelForm>{props.label}</LabelForm>}
        {props.children}
        {props.error && (
          <MyTxt clsName="" style={{marginTop: 5, color: colors.error.main, fontSize: 10}}>
            {props.error}
          </MyTxt>
        )}
    </View>
  )
}

export default FormGroup