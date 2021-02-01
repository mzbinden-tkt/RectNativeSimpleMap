import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, Dimensions } from 'react-native'

export default ({ puntos, closeModal }) => {
  return (
    <>
    <View style={styles.list}>
      <FlatList 
        data={puntos.map(p => p.name)}
        renderItem={({ item }) => 
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>}
        keyExtractor={item => item} 
        />
    </View>
    <View style={styles.button}>
      <Button onPress={closeModal} title='Cerrar'/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 250
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 15
  },
  button: {
    paddingBottom: 15,
  }
})
