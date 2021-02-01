import React, {useState} from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export default ({ title, ...props}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  }
});
