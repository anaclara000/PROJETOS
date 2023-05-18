import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const image = require('./assets/fundo.png')
const imageGoogle = require('./assets/google.png')

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.cont_size}>
          <Text style={styles.titulo}>Bem Vindo!</Text>
          <Text style={styles.subtitulo}>Facilite seus eventos. Divirta-se ao máximo.</Text>
          <View>
            <Text style={styles.label}>Usuário</Text>
            <View style={styles.input}>
              <AntDesign name="user" size={17} color="#A4A4A4" />
              <TextInput style={{
                outline: 'none',
                fontSize: '13px',
                color: '#A4A4A4',
                fontFamily: 'Poppins_400Regular',
                marginLeft: '15px'
              }} placeholder="E-mail" placeholderTextColor="#A4A4A4" />
            </View>
            <Text style={[styles.label, { marginTop: '12px' }]}>Senha</Text>
            <View style={styles.input}>
              <Feather name="key" size={17} color="#A4A4A4" />
              <TextInput style={{
                outline: 'none',
                fontSize: '13px',
                color: '#A4A4A4',
                fontFamily: 'Poppins_400Regular',
                marginLeft: '15px'
              }} placeholder="Senha" placeholderTextColor="#A4A4A4" />
            </View>

            <Text style={[styles.senha, { marginTop: '5px' }]}>Esqueceu a senha?</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: 'white' }}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.textos}>Ou continue com</Text>
            <View >
              <Image source={imageGoogle} style={{ marginTop: '15%', marginLeft: '38%', borderRadius: '10px', border: '1px solid rgba(164,164,164,0.4)', width: '50px', height: '45px', padding: '8px' }}>

              </Image>
            </View>
          </View>
          <Text style={styles.textos}>Não tem conta?<Text style={{ fontWeight: 'bold' }}>Cadastre-se</Text></Text>
        </View>
      </ImageBackground>



    </View>
  );

}




const styles = StyleSheet.create({
  titulo: {
    color: '#fff',
    fontSize: '30px',
    fontFamily: 'Poppins_600SemiBold',
  },
  subtitulo: {
    color: '#A4A4A4',
    fontFamily: 'Poppins_400Regular',
    fontSize: '12px',
    marginBottom: '10%'
  },
  image: {
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
  },
  cont_size: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '60%'
  },
  btn: {
    color: 'white',
    backgroundImage: 'linear-gradient(90deg, rgba(156,63,228,1) 0%, rgba(198,86,71,1) 100%)',
    marginTop: '10%',
    padding: '10px',
    borderRadius: '10px',
    width: '65vw'
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid rgba(164,164,164,0.4)',
    backgroundImage: 'linear-gradient(90deg, rgba(164,164,164,0.4) 0%, rgba(164,164,164,0) 100%)',
    alignItems: 'center'
  },
  textos: {
    color: '#A4A4A4',
    fontFamily: 'Poppins_400Regular',
    fontSize: '13px',
    marginTop: '10%'
  },
  label: {
    color: '#A4A4A4',
    fontFamily: 'Poppins_400Regular',
    fontSize: '13px',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  textinput: {

  },
  senha: {
    fontSize: '12px',
    color: '#A4A4A4',
    display: 'flex',
    justifyContent: 'flex-end'
  }

});

