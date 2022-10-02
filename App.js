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

  // Set the textinput to be empty
  const reset = () => {
    onChangeText("")
  }

  // Check if the given number is correct
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

  // Prepare to go to final screen from gameWinpage
  const change = () =>{
      setGameWinVisible(false)
      setGameFailVisible(false)
      setFinalVisible(true)
  }

  // Prepare to go back to the starting screen
  const startagain = () =>{
    setGameWinVisible(false)
    setGameFailVisible(false)
    setFinalVisible(false)
    onChangeText("")
  }

  // Prepare to go to final screen from gamefailpage
  const toFinal = () =>{
      setGameWinVisible(false)
      setGameFailVisible(false)
      setFinalVisible(true)
  }

  // from game screen to starting screen
  const goBack = () =>{
    onChangeText("")
    setGameFailVisible(false)
  }

  return (
    // dismiss the keyboard
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}> 
      <View style={styles.container}>
        {/* game modal */}
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
        {/* game modal */}
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
        {/* final screen */}
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
        {/* starting screen */}
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
      
      </View>
    </TouchableWithoutFeedback>
  );
}
