import React,{
  useState,
  useEffect
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import { ScreenConst, Navigator } from '../navigation'

const IntroScreen = (props) => {

  return (
    <View
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Text>Intro Screen</Text>
      <Button
        title={"push"}
        onPress = {() => {
          Navigator.setRootScreen(ScreenConst.SCREEN_MAIN)
        }}
      />
    </View>
  );
};
  
export default IntroScreen