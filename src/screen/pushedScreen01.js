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

const PushedScreen01 = (props) => {

  return (
    <View
      style={{
        flex:1,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Text>Pushed Screen01</Text>
      <Button
        title={"pop"}
        onPress={() => {
          Navigator.popScreen(props.componentId)
        }}
      />
    </View>
  );
};
  
export default PushedScreen01