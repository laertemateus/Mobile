import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default class CalculadoraIMC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      altura:null,
      peso:null,
      resultado:null
    };
  }

  // Função chamada ao alterar o conteúdo do campo Altura
  atualizarPeso = (text) => { 
    this.setState({altura:parseFloat(text)});
  }

  // Função chamada ao alterar o conteúdo do campo Peso
  atualizarAltura = (text) =>  {
    this.setState({peso:parseFloat(text)});
  }

  // Função chamada ao clicar no botão "Calcular"
  calcularIMC = (e) => {
    if(isNaN(this.state.altura) || isNaN(this.state.peso)) {
      this.setState({resultado:"Entrada inválida."});
    }else{
      this.setState({resultado: this.state.peso / Math.pow(this.state.altura, 2) });
    }
  }

  render() {
    return (
      <View>
        <Text>Altura</Text>
        <TextInput onChangeText={this.atualizarPeso}/>
        <Text>Peso</Text>
        <TextInput onChangeText={this.atualizarAltura} />
        <Button title="Calcular" onPress={this.calcularIMC} />
        <Text>{this.state.resultado}</Text>
      </View>
    );
  }
}