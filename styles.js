import { StyleSheet } from 'react-native';
export default StyleSheet.create({
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
  
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity:0.1,
      shadowRadius:0.76
    
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
    gamebtn: {
      // flexDirection: 'row',
      justifyContent: 'space-between',
    },
    btn1:{
      color:'purple',
      fontSize:20,
      padding:10
    },
    btn2:{
      color:'pink',
      fontSize:20,
      padding:10,
    },
  });