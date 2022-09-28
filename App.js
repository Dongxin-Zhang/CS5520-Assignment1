import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TextInput, View, Alert } from 'react-native';
import React from "react";

export default function App() {

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const reset = () => {
    
  }

  return (
    <View style={styles.container}>
      <View style= {styles.header}>
        <Text style={styles.title}>Guss My Number</Text>
      </View>
      <View style= {styles.content}>
        <Text style={styles.guide}>Enter a Number</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
      />
        <View style={styles.fixToText}>
        <Button
          style={styles.btnl}
          title="Reset"
          onPress={reset}
        />
        <Button
          style={styles.btnr}
          title="Confirm"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    borderColor:'blue',
    borderWidth:5,
    borderStyle: 'solid',
    padding:10,
    top:-80,
  },
  title:{
    color:'blue',
    fontSize: 30,
  },
  content:{
    alignItems:'center',
    height:200,
    width:300,
    backgroundColor:'black',
    borderRadius:10,
    justifyContent: 'center',
  },
  guide:{
    color:'yellow',
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderBottomColor:'yellow',
    borderBottomWidth:3,
    width:60,
    color:'yellow',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnl:{
    color:'white',
  }
});
