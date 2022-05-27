import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import avi from "./assets/Aviao.png"

// function Login({ navigation }) {

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');

//   function verificacao() {
//     const verification = false

//     if (email === '' || senha === '') {
//       alert('Preencha todos os campos')
//     }
//     else if (email === 'kaike' && senha === '123') {
//       navigation.navigate('Home')
//     }
//   };

//   return (
//     <View style={stylesLogin.container}>
//       <Text style={stylesLogin.h1}>Login</Text>
//       <View style={stylesLogin.tudo}>
//         <Text style={stylesLogin.p}>Seu e-mail</Text>
//         <TextInput
//           onChangeText={email => setEmail(email)}
//           placeholder='exemplo@gmail.com'
//           style={stylesLogin.info} />
//       </View>
//       <View style={stylesLogin.tudo}>
//         <Text style={stylesLogin.p}>Sua senha</Text>
//         <TextInput
//           keyboardType='numeric'
//           onChangeText={senha => setSenha(senha)}
//           placeholder='1234'
//           style={stylesLogin.info}
//         />
//       </View>
//       <View style={stylesLogin.checkbox}>
//         <CheckBox> </CheckBox> <Text style={stylesLogin.login}> Manter-me logado</Text>
//       </View>
//       <View style={stylesLogin.tudo}>
//         <Button
//           title="Logar"
//           onPress={() => verificacao()}
//         />
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const stylesLogin = StyleSheet.create({
  bemVindo: {
    fontFamily: 'cursive',
    fontSize: 40
  },
  imagem: {
    width: '100vw',
    width: 200,
    height: 200,
    marginTop: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  h1: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'cursive',
    textDecorationLine: 'underline',

  },

  info: {
    height: 30,
    borderWidth: 1,

  },

  tudo: {
    margin: '20px',
  },

  checkbox: {
    margin: '20px',

  },

  login: {
    position: 'absolute',
    left: '20px',
    fontFamily: 'cursive',
  },

  p: {
    fontFamily: 'cursive',
  },

});


function Home({ navigation }) {
  return (
    <View style={{ justifyContent: 'center' }}>

      <View style={{ flex: 1, alignItems: 'center', marginTop: '50%' }}>
        <Image source={require('./assets/Aviao.png')} style={stylesHome.img}></Image>
      </View>

      {/* <View>
        <Text style={stylesHome.text1}>Bem vindo a companhia Avianca</Text>
        <Text style={stylesHome.descripition}>ajkfoheibrlgkjbwaçogjbao´~jrhgóa~rpfisaghçbvsliyhfgvliysvilfygvbsiçfihdcbgcvsjoabevcijsbdvoba/~ewoaõbh;õvbçihyvfçih.yvç;oiyhfvlutgdfotfv;çohga~ph/]pvga]rgva51b6a5et1ba5r1g35ar4g5adr1b3a1rg56f4ar3g1a3r51g65ar1g32a1r35rg534ar</Text>
      </View> */}

      <View style={stylesHome.botao}>
        <Pressable onPress={() => navigation.navigate('Option')}>
          <Text style={stylesHome.text}>Continuar</Text>
        </Pressable>
      </View>


    </View>
  );
}
const stylesHome = StyleSheet.create({

  img: { width: '100vw', height: 150 },
  text1: { fontSize: 25, textAlign: 'center', marginTop: 10, color: 'blue', fontFamily: 'sans-serif' },
  descripition: { maxWidth: '60%', margin: 'auto' },
  botao: { alignItems: 'center', backgroundColor: '#3535E8', width: 100, height: 30, marginHorizontal: 'auto', borderRadius: 7, marginTop: '40%' },
  text: { color: '#fff', fontSize: 20 }


})



function Option({ navigation }) {
  return (
    <View>
      <Text style={stylesOption.opcao}>
        O que deseja?
      </Text>
      <View style={stylesOption.opcoes}>
        <Text style={stylesOption.textos}>1 - Fazer  <Pressable onPress={() => navigation.navigate('Cadastro')}><Text style={stylesOption.link}>Cadastro</Text></Pressable></Text>
        <Text style={stylesOption.textos}>2 - Comprar <Pressable onPress={() => navigation.navigate('Passagem')}><Text style={stylesOption.link}>Passagem</Text></Pressable></Text>
        <Text style={stylesOption.textos}>3 - Voltar para <Pressable onPress={() => navigation.navigate('Home')}><Text style={stylesOption.link}>Home</Text></Pressable></Text>
        <Text style={stylesOption.textos}>4 - Qual o proximo <Pressable onPress={() => navigation.navigate('Destino')}><Text style={stylesOption.link}>Destino</Text></Pressable></Text>
      </View>
    </View>
  )
}
const stylesOption = StyleSheet.create({
  opcao: { textAlign: 'center', fontSize: 25},
  textos:{marginTop: 40, marginLeft: 15, fontSize: 20},
  link: {color: 'blue'}
})

function Cadastro({ navigation }) {
  return (
    <View>
      <View>
        <Text>Nome <TextInput /></Text>
        <Text>Data nasc <TextInput /></Text>
        <Text>CPF<TextInput /></Text>
        <Text>Endereço<TextInput /></Text>
      </View>
      <Button
        title='Home'
        onPress={() => navigation.navigate('Home')} />
      <Button
        title='Passagem'
        onPress={() => navigation.navigate('Passagem')} />
    </View>
  );
}

function Passagem({ navigation }) {
  return (
    <View>
      <View>
        <Text>Destino <TextInput  /></Text>
        <Text>Origem <TextInput  /></Text>
        <Text>Data Da viagem <TextInput  /></Text>
        <Text>Horário Vôo<TextInput  /></Text>
        <Text>Preço Passagem<TextInput /></Text>
      </View>

      <View>
        <Text>Formas de pagamento</Text>
        <CheckBox /><Text>Debito</Text>
        <CheckBox /><Text>Credito</Text>
      </View>

      <Button
        title='Home'
        onPress={() => navigation.navigate('Home')} />
      <Button
        title='Destino'
        onPress={() => navigation.navigate('Destino')} />
    </View>
  );
}

function Destino({ navigation }) {
  return (
    <View>
      <CheckBox /><Text>Rio De Janeiro</Text>
      <CheckBox /><Text>Fortaleza</Text>
      <CheckBox /><Text>Brasilia</Text>
      <CheckBox /><Text>Porto alegre</Text>
      <CheckBox /><Text>Curitiba</Text>


      <Button
        title='Continuar'
        onPress={() => navigation.navigate('Option')} />
      <Button
        title='Passagem'
        onPress={() => navigation.navigate('Passagem')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Passagem" component={Passagem} />
        <Stack.Screen name="Destino" component={Destino} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();



