import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, Button, TextInput, View, Alert, Modal, Pressable,Keyboard, TouchableWithoutFeedback} from 'react-native';
import React,{ useState } from "react";
import styles from './styles.js'
export default function App() {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [target, setTarget] = React.useState(1021);

  const [gameWinVisible, setGameWinVisible] = React.useState(false);
  const [gameFailVisible, setGameFailVisible] = React.useState(false);
  const [fainalVisible, setFinalVisible] = React.useState(false);
  const [gamestate,setGamestate] = React.useState(false);

  const reset = () => {
    onChangeText("")
  }
  const check = () => {
    if (text >= 1020 && text <= 1029) {
      if (text == target){
        setGameWinVisible(true)
        setGamestate(true)
      }
      else{
        setGameFailVisible(true)
        setGamestate(false)
      }
    }
    else{
      Alert.alert('Invalid number!','Number has to be a number between 1020 and 1029')
    }
  }

  const change = () =>{
      setGameWinVisible(false)
      setGameFailVisible(false)
      setFinalVisible(true)
  }

  const startagain = () =>{
    setGameWinVisible(false)
    setGameFailVisible(false)
    setFinalVisible(false)
    onChangeText("")
  }

  const toFinal = () =>{
    setGameWinVisible(false)
      setGameFailVisible(false)
      setFinalVisible(true)
  }

  const goBack = () =>{
    onChangeText("")
    setGameFailVisible(false)
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Modal  visible={gameWinVisible}>
          <View style= {styles.container}>
            <View style= {styles.content}>
              <Text style={styles.guide}>Congrats! You Won!</Text>
              <Pressable
                onPress={change}
              >
                <Text style = {styles.btn2}>Thank you!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal  visible={gameFailVisible}>
          <View style= {styles.container}>
            <View style= {styles.content}>
              <Text style={styles.guide}>You have chosen {text}</Text>
              <Text style={styles.guide}>That's not my number!</Text>
              <Text style={styles.guide}>Guess {(text < 1021) ? "higher" : "lower"}!</Text>
              <Pressable
                onPress={toFinal}
              >
                <Text style = {styles.btn1}>I am done</Text>
              </Pressable>
              <Pressable
                onPress={goBack}
              >
                <Text style = {styles.btn2}>Let Me Guess Again</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal  visible={fainalVisible}>
          <View style= {styles.container}>
            <View style= {styles.header}>
              <Text style={styles.title}>Game is Over</Text>
            </View>
            <View style= {styles.content}>
              <Text style={styles.guide}>Here's your picture</Text>
              <Image
                source = {gamestate ? {uri:'https://picsum.photos/id/1024/100/100'} : require('./sad.png')}
                style = {{width:100,height:100}}
              ></Image>
              <Pressable
                onPress={startagain}
              >
                <Text style = {styles.btn2}>Start Again</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style= {styles.header}>
          <Text style={styles.title}>Guss My Number</Text>
        </View>
        <View style= {styles.content}>
          <Text style={styles.guide}>Enter a Number</Text>
          <TextInput
            maxLength='4'
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <View style={styles.fixToText}>
            <Pressable
              onPress={reset}
            >
              <Text style = {styles.btn1}>Reset</Text>
            </Pressable>
            <Pressable
              onPress={check}
            >
              <Text style = {styles.btn2}>Confirm</Text>
            </Pressable>
          </View>
        </View>
        {/* <StatusBar style="auto" /> */}
      
      </View>
    </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header:{
//     borderColor:'blue',
//     borderWidth:5,
//     borderStyle: 'solid',
//     padding:10,
//     top:-80,
//   },
//   title:{
//     color:'blue',
//     fontSize: 30,
//   },
//   content:{
//     alignItems:'center',
//     height:200,
//     width:300,
//     backgroundColor:'black',
//     borderRadius:10,
//     justifyContent: 'center',

//     shadowOffset: {
//       width: 0,
//       height: 5
//     },
//     shadowOpacity:0.1,
//     shadowRadius:0.76
  
//   },
//   guide:{
//     color:'yellow',
//     fontSize: 30,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderBottomColor:'yellow',
//     borderBottomWidth:3,
//     width:60,
//     color:'yellow',
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   gamebtn: {
//     // flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   btn1:{
//     color:'purple',
//     fontSize:20,
//     padding:10
//   },
//   btn2:{
//     color:'pink',
//     fontSize:20,
//     padding:10,
//   },
// });