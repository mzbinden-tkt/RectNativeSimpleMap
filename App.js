import React, {useState} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {Map, Modal, Dashboard, Input, List} from './components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibilityFilter, setvisibilityFilter] = useState('new_punto')
  const [nombre, setNombre] = useState('')
  const [visibility, setvisibility] = useState(false)

  const handleLongPress = ({nativeEvent}) => {
    setvisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setvisibility(true)
  }
  const handleChangeText = text => {
    setNombre(text)
  }
  const handleSubmit = () => {
    const newPunto = {coordinate: puntoTemp, name: nombre}
    setPuntos(puntos.concat(newPunto))
    setvisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setvisibilityFilter('all_puntos')
    setvisibility(true)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos}/>
      <Dashboard onPressLeft={handleLista} textLeft='Lista'/>
      <Modal visibility={visibility}>
        { visibilityFilter === 'new_punto'
        ?
        <View style={styles.form}>
          <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}></Input>
          <Button title="Aceptar" onPress={handleSubmit}/>
        </View>
        :
        <List puntos={puntos} closeModal={() => setvisibility(false)} />
      }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 15
  }
});
