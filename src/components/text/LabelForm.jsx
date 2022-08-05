import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LabelForm(props) {
  return (<Text {...props} style={styles.label}>{props.children}</Text>)
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Nunito',
        color: '#1A1A1A',
        marginBottom: 5,
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 20
    }
})