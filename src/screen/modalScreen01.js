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

const ModalScreen01 = (props) => {

  return (
    <View
      style={{
        flex:1,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Text>Modal Screen01</Text>
      <Button
        title={"dismiss"}
        onPress={() => {
          Navigator.dismissModal(props.componentId)
        }}
      />
    </View>
  );
};
  
export default ModalScreen01