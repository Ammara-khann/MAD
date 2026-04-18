import { Modal, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyle } from './GlobalStyle' // Import your global styles

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  
  return (
    <View style={GlobalStyle.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={GlobalStyle.centeredView}>
          <View style={GlobalStyle.modalView}>
            <Text style={GlobalStyle.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[GlobalStyle.button, GlobalStyle.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={GlobalStyle.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[GlobalStyle.button, GlobalStyle.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={GlobalStyle.textStyle}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App