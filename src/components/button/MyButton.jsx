import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import classNames from 'classnames';

export default function MyButton(props) {
  const cls = (props.clsName) ?? classNames(props.clsName)
  return (
    <TouchableHighlight className={cls} {...props}>
        {props.children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({})