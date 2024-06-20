import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Home from './components/Home'; // Importa o componente Home

const Stack = createStackNavigator();

// Tela de Login
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Logo do aplicativo */}
      <TouchableOpacity>
        <Image source={require('./assets/img/tpets 1.png')} style={styles.logo} />
      </TouchableOpacity>

      {/* Inputs para o usuário inserir seus dados */}
      <TextInput style={styles.input} placeholder="Nome ..." />
      <TextInput style={styles.input} placeholder="CPF ..." />
      <TextInput style={styles.input} placeholder="Telefone ..." />
      <TextInput style={styles.input} placeholder="Email ..." />

      {/* Ícone de pata */}
      <TouchableOpacity>
        <Image source={require('./assets/img/Vector.png')} style={styles.pawIcon} />
      </TouchableOpacity>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
};

// _______________________________________________________________
// Componente principal

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        {/* Configuração da tela de Login */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        {/* Configuração da tela Home */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

// ____________________________________________________________
// Estilos CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#699BF7',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFA500',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pawIcon: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
});
