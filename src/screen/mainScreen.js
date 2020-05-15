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

const MainScreen = (props) => {

  return (
    <View
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"white"
      }}
    >
      <Text>Main Screen</Text>
      <Button
        title={"push"}
        onPress = {() => {
          Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_PUSHED01, {}, "left")
        }}
      />
      <Button
        title={"show modal"}
        onPress = {() => {
          Navigator.showModal(ScreenConst.SCREEN_MODAL01, {}, "fade")
        }}
      />

      <Text>
        asgdsa;jkgsadgas



        sdagdsag

        dsgdas
      </Text>
    </View>
  );
};
  
export default MainScreen