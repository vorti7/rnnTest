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

const OverlayScreen01 = (props) => {

  return (
    <View
      style={{
        flex:1,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Text>Overlay Screen01</Text>
      <Button
        title={"dismiss"}
        onPress={() => {
          Navigator.dismissOverlay(props.componentId)
        }}
      />
    </View>
  );
};
  
export default OverlayScreen01