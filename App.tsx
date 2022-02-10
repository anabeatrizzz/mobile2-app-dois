import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View } from 'react-native';
import styles from './App.css';

export default function App() {
  const [state, setState] = useState({
    value1: 0, value2: 0,
    value3: 0, result: 'x',
    value4: 0, value5: 0
  })

  function calculate() {
    let m1 = (state.value1 * state.value2 * state.value5)
    let m2 = (state.value4 * state.value3)
    let value = m1 / m2
    setState({ ...state, result: String(value) })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <TextInput
            placeholder='Valor 01'
            placeholderTextColor='#243870'
            keyboardType='numeric'
            style={styles.input}
            testID="value1"
            onChangeText={(value1) => {
              setState({ ...state, value1: Number(value1) })
            }}
          >
          </TextInput>
          
          <TextInput
            placeholder='Valor 02'
            placeholderTextColor='#243870'
            keyboardType='numeric'
            style={styles.input}
            testID="value2"
            onChangeText={(value2) => {
              setState({ ...state, value2: Number(value2) })
            }}
          >
          </TextInput>
          
          <TextInput
            placeholder='Valor 03'
            placeholderTextColor='#243870'
            keyboardType='numeric'
            style={styles.input}
            testID="value3"
            onChangeText={(value3) => {
              setState({ ...state, value3: Number(value3) })
            }}
          >
          </TextInput>
        </View>
        <View style={styles.inputs}>
          <TextInput
            placeholder='Valor 04'
            placeholderTextColor='#243870'
            keyboardType='numeric'
            style={styles.input}
            testID="value4"
            onChangeText={(value4) => {
              setState({ ...state, value4: Number(value4) })
            }}
          >
          </TextInput>
          
          <TextInput
            editable={false}
            style={styles.input}
            value={String(state.result)}
          >
          </TextInput>
          
          <TextInput
            placeholder='Valor 05'
            placeholderTextColor='#243870'
            keyboardType='numeric'
            style={styles.input}
            testID="value5"
            onChangeText={(value5) => {
              setState({ ...state, value5: Number(value5) })
            }}
          >
          </TextInput>
        </View>
        
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => calculate()}
            testID="calculate-btn"
          >
            <Text style={styles.btnTxt}>Efetuar regra de 3 composta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}