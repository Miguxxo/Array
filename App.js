import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Campeões do Wild Rift
      </Text>
  
  <FlatList
    data={arrayDados}
    renderItem={({item})=>
    <SafeAreaView styles={styles.containerWR}>
    <Text style={styles.textoWR}> {item.agente} </Text>

    </SafeAreaView>
    }
  />

    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#345eeb',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f7f8fa',
  },

  textoWR: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f7f8fa',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#031759',
    borderRadius:10,
    padding:10
  },
});

const arrayDados = [
  {agente:'Aatrox'},
  {agente:'Ahti'},
  {agente:'Akali'},
  {agente:'Alistar'},
  {agente:'Amumu'},
  {agente:'Annie'},
  {agente:'Ashe'},
  {agente:'Aurelion Sol'},
  {agente:'Akshan'},
  {agente:'Blitzcrank'},
  {agente:'Brand'},
  {agente:'Braum'},
  {agente:'Caitlyn'},
  {agente:'Camille'},
  {agente:'Corki'},
  {agente:'Darius'},
  {agente:'Diana'},
  {agente:'Dr. Mundo'},
  {agente:'Draven'},
  {agente:'Ekko'},
  {agente:'Evelynnn'},
  {agente:'Ezreal'}
];
