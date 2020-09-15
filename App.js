import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      valor1: 0, valor2: 0,
      valor3: 0, resultado: 'x',
      valor4: 0, valor5: 0
    }
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    //let valor = this.state.valor3 * this.state.valor2 / this.state.valor1
    let m1 = (this.state.valor1 * this.state.valor2 * this.state.valor5)
    let m2 = (this.state.valor4 * this.state.valor3)
    let valor = m1 / m2
    let atualizar = this.state
    atualizar.resultado = valor
    this.setState(atualizar)
  }

  render(){
    return(
      <>
        <StatusBar backgroundColor={'#FFF'}></StatusBar>
        <View style={estilos.conteudo}>
          <View style={estilos.entradas}>
            <TextInput
              placeholder='Valor 01'
              placeholderTextColor='#243870'
              keyboardType='numeric'
              style={estilos.entrada}
              onChangeText={
                (valor1) => { this.setState({ valor1 }) }
              }
            >
            </TextInput>
            <Text>{'   '}</Text>
            <TextInput
              placeholder='Valor 02'
              placeholderTextColor='#243870'
              keyboardType='numeric'
              style={estilos.entrada}
              onChangeText={
                (valor2) => { this.setState({ valor2 }) }
              }
            >
            </TextInput>
            <Text>{'   '}</Text>
            <TextInput
              placeholder='Valor 03'
              placeholderTextColor='#243870'
              keyboardType='numeric'
              style={estilos.entrada}
              onChangeText={
                (valor3) => { this.setState({ valor3 }) }
              }
            >
            </TextInput>
          </View>
          <View style={estilos.entradas}>
            <TextInput
              placeholder='Valor 04'
              placeholderTextColor='#243870'
              keyboardType='numeric'
              style={estilos.entrada}
              onChangeText={
                (valor4) => { this.setState({ valor4 }) }
              }
            >
            </TextInput>
            <Text>{'   '}</Text>
            <TextInput
              editable={false}
              style={estilos.entrada}
              value={String(this.state.resultado)}
            >
            </TextInput>
            <Text>{'   '}</Text>
            <TextInput
              placeholder='Valor 05'
              placeholderTextColor='#243870'
              keyboardType='numeric'
              style={estilos.entrada}
              onChangeText={
                (valor5) => { this.setState({ valor5 }) }
              }
            >
            </TextInput>
          </View>
          <Text>{'\n'}</Text>
          <View>
            <TouchableOpacity style={estilos.botao} onPress={this.calcular}>
              <Text style={estilos.textoBotao}>Efetuar regra de 3 composta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

const estilos = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC9CDF'
  },
  entradas: {
    flexDirection: 'row'
  },
  entrada: {
    height: 70,
    textAlign: 'center',
    width: '30%',
    fontSize: 20,
    marginTop: 24,
    backgroundColor: '#FFF',
    color: '#243870'
  },
  botao: {
    padding: 10,
    backgroundColor: "#EA428B",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  textoBotao: {
    fontSize: 20,
    color: '#f7bad5',
    fontWeight: 'bold'
  }
});

export default App;