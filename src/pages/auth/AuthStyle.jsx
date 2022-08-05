import { screenHeight, screenWidth } from '../../utils'

const AuthStyle = {
    formContainer: {
      width: screenWidth,
      height: screenHeight - 180
    },
    formBox: {
      width: screenWidth - 30,
      height: (screenHeight - 180) - 100
    },
    formWidth: {
      width: screenWidth - 30,
    },
    header: {
      height: 180,
      left: 0,
      top: 0,
      backgroundColor: '#1A4C93',
    },
    nunitoFont: {
      fontFamily: 'Nunito'
    },
    title: {
      color: '#1A1A1A'
    },
    formControl: {
      marginBottom: 20
    },
    labelText: {
      marginBottom: 5,
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 20
    },
    inputText: {
      borderColor: '#E6E6E6'
    },
    inpitWithIcon: {
      position: 'relative'
    },
    inputTextIcon: {
      position: 'absolute',
      right: 8,
    },
    svgStyle: {
      position: 'absolute',
      top: 0
    }
}

export default AuthStyle