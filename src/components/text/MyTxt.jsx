import { View, Text } from 'react-native'
import React from 'react'
import classNames from 'classnames';

const MyTxt = (props) => {
  const cls = (props.clsName) ?? classNames(props.clsName)
  return (<Text className={cls} style={{fontFamily: 'Nunito'}} {...props}>{props.children}</Text>)
}

export default MyTxt