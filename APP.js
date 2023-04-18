import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react"
import { StyleSheet,FlatList, ScrollView, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [name, setName] = useState('Mateus e Yohana');
  const [pessoas, setPessoas] = useState([
    { nome: '', key: 1 },
    { nome: '', key: 2 },
    { nome: '', key: 3 },
    { nome: '', key: 4 },
    { nome: '', key: 5 },
    { nome: '', key: 6 },
  ])
  const [nome, setNome] = useState('');

  return (


    <ScrollView>

      <View style={styles.container0}>

        <View style={styles.view0}>
          <Text style={styles.boldText}>MY FOOD RECIPES</Text>
        </View>

        <Text>Email: </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="@" 
          />

        <Text>Nome completo: </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Nome" />

        <Text>Senha numerica:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="..."
          onChangeText={setNome}/>
          <Text>{nome}</Text>
        

        <Text>Telefone:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="( ) 0000-0000"
        />

        <View style={styles.buttonContainer}>
          <Button title="Confirmar" onPress={() => alert("Cadastro concluido")}
            color="#FF8C00" />
        </View>





        {pessoas.map(
          (item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.nome}</Text>
              </View>

            )
          }
        )}
        
        
        <View style={styles.container3}>
           <TouchableOpacity>
          <MaterialIcons style={styles.caixaUm} name="dinner-dining" size={60} color="black" />
         
          
          
          <Entypo style={styles.caixaDois} name="drink" size={51} color="black" />
          
          
          <MaterialCommunityIcons style={styles.caixaTres} name="cupcake" size={51} color="black" />
          </TouchableOpacity>
          
        </View>
        

        <View style={styles.container4}>
          <View style={styles.button1}>
           
            <Button
              title="Filtro" onPress={() => alert("Ainda estamos sem receitas!")}
              color="#FF8C00" />
          </View>
          <View style={styles.button2}>
            <Button title="Filtro" onPress={() => alert("Ainda estamos sem receitas!")}
              color="#FF8C00" />
          </View>
          <View style={styles.button3}>
            <Button title="Filtro" onPress={() => alert("Ainda estamos sem receitas!")}
              color="#FF8C00" />
          </View>
        </View>

       { <FlatList
          numColumns={2}
          keyExtractor={(item) => item.key}
          data={pessoas}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={styles.item}>{item.nome}</Text>
            </TouchableOpacity>
          )}
          />
 }






        <View style={styles.container1}>
          <Text>{name}</Text>
        </View>






        <StatusBar style="auto" />
      </View>
    </ScrollView>




  );
}

const styles = StyleSheet.create({
  view0: {
    backgroundColor: "#CD853F",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    width: 900,
    marginBottom: 100,
    padding: 20,
  },

  boldText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFDEAD",
  },


  container0: {
    flex: 1,
    backgroundColor: '#FFEBCD',
    alignItems: 'center',
    justifyContent: 'center',
    margintop: 30,
  },
  input: {
    borderWidth: 5,
    borderColor: '#F4A460',
    padding: 8,
    margin: 10,
    width: 200,
  },
  container1: {
    flex: 0,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 100,
    width: 200,
    padding: 0,

  },
  container3: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingtop: 40,


  },
  caixaUm: {

    padding: 20,
    flex: 1,
  },
  caixaDois: {
    flex: 1,
    padding: 20,
  },
  caixaTres: {

    padding: 20,
  },

  container4: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingtop: 40,

  },
  button1: {
    flex: 1,
    padding: 5,
  },
  button2: {
    flex: 1,
    padding: 5,
  },

  button3: {
    flex: 1,
    padding: 5,
  },




});

