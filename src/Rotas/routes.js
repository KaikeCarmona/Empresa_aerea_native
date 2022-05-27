export default function routes(){
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Option" component={Option} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Passagem" component={Passagem} />
      <Stack.Screen name="Destino" component={Destino} />
    </Stack.Navigator>
  </NavigationContainer>
}
const Stack = createNativeStackNavigator();
