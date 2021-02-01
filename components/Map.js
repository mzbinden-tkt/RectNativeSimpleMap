import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import {StyleSheet, Dimensions} from 'react-native'

export default ({onLongPress, puntos }) => {
  return (
      <MapView style={styles.map}
        onLongPress={onLongPress}>
          { 
          puntos.map( p => {
            <Marker 
              coordinate={p.coordinate}
              title={p.name}/>

          })
          }
        </MapView>
  )
}


const styles = StyleSheet.create({
  map:{
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
  },
});

