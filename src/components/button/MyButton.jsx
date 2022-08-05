import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import classNames from 'classnames';

export default function MyButton(props) {
  const { clsName, ...rest} = props;
  return (
    <TouchableHighlight className={classNames(clsName)} {...props}>
        {props.children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({})