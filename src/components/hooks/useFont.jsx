import * as Font from "expo-font";
 
export default useFont = async () => {
    return Font.loadAsync({
      'Nunito': require('../../../assets/fonts/Nunito.ttf'),
    });
}