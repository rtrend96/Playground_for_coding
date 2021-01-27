import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.red}>
          helloo..
      </Text>
      <Image style={styles.Image} source={require('./images/one.jpg')} />
      <Image style={styles.Image} source={{uri: 'https://cdn.vox-cdn.com/thumbor/VPV0QbW93D2w-iDxdB95zF5wSQ8=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/8890341/one_piece.png'}}/>
      <View style={styles.bolck1}/>
      <View style={styles.block2}/>
      <View style={styles.block3}/>
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
   marginTop:50,
   marginLeft:40,
   flex:1,
   flexDirection:'column'
 },
 red:{
   color:'red',
   fontSize: 30,
 },
 bolck1:{
   backgroundColor:'red',
   width:50,
   height:50,
 },
 block2:{
     backgroundColor:'yellow',
     width:50,
     height:50,
 },
 block3:{
  backgroundColor:'green',
  width:50,
  height:50,
 },
 Image:{
   width: 200,
   height:200
 }
});

export default App;
