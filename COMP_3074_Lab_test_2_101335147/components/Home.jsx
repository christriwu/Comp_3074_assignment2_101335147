import React, {useState, useEffect} from 'react';
import {View, Text, TouchOpacity, StyleSheet, FlatList} from 'react-native';
import AppButton from './../assets/AppButton'


const Home = ({ navigation}) => {
    const albums = async () => {
     return
     await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => { return json.data; })
      .catch((error) => {
         console.error(error);
      });
    };

   return(
   <View style={styles.container}>
      <AppButton title="test" />
      <AppButton title="test 2" />
   </View>


   )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F0F0F0', // Light gray background color
  }
})


export default Home;