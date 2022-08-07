import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/index'

export default function LabelForm(props) {
  return (<Text {...props} style={styles.label}>{props.children}</Text>)
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Nunito',
        color: colors.neutral.primary,
        marginBottom: 5,
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 20
    }
})