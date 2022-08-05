import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputText = ( props ) => {
    return (
        <TextInput
            {...props}
            editable
            className="w-10 h-2"
        />
    );
}

export default InputText

const styles = StyleSheet.create({})