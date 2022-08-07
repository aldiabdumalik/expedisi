import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const mainColor = '#1A4C93';
const colors = {
    primary: {
        light: '#EBF3FF',
        main: '#1A4C93',
        dark: '#123668',
    },
    neutral: {
        light: '#999999',
        main: '#595959',
        dark: '#1A1A1A',
        primary: '#1A1A1A',
        secondary: '#595959',
        caption: '#999999',
    },
    gray: {
        light: '#F2F2F2',
        main: '#E6E6E6',
        dark: '#CCCCCC',
        placeholder: '#CCCCCC',
        divider: '#E6E6E6',
        background: '#F2F2F2',
    },
    success: {
        light: '#EEFCF9',
        main: '#1A9376',
        dark: '#126853',
    },
    warning: {
        light: '#FCF6EE',
        main: '#DC9538',
        dark: '#BF7B22',
    },
    error: {
        light: '#FCEEEE',
        main: '#931A1A',
        dark: '#BF2222',
    }
}
export { screenWidth, screenHeight, mainColor, colors } 