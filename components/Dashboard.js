import React from 'react'
import {View, Button, StyleSheet, Dimensions} from 'react-native'

export default ({ onPressLeft, textLeft }) => {
  return (
    <View style={styles.dashboard}>
      <Button onPress={onPressLeft} title={textLeft}/>
      <Button title="Mostrar/Ocultar"/>
    </View>
  )
}
const styles = StyleSheet.create({
  dashboard:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
