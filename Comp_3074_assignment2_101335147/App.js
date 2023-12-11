import React, { useState } from 'react';

import {View,Text,TextInput,Switch,Button,Alert,SafeAreaView,} from 'react-native';

const App = () => {
 const [size, setSize] = useState('');
 const [flooringPrice, setFlooringPrice] = useState('');
 const [installationCost, setInstallationCost] = useState('');

 const calculate = () => {

    if (!size || !flooringPrice || !installationCost) {

      Alert.alert('Error', 'All fields are required');

      return;

    }
    const flooringCost = parseFloat(size) * parseFloat(flooringPrice);
    const installationCostBeforeTax = parseFloat(size) * parseFloat(installationCost);
    const totalCostBeforeTax = flooringCost + installationCostBeforeTax;
    const tax = totalCostBeforeTax * 0.13;

    Alert.alert(

      'Results',

      `Flooring Cost: ${flooringCost}\nInstallation Cost: ${installationCostBeforeTax}\nTotal Cost: ${totalCostBeforeTax}\nTax: ${tax}`,

    );

 };


 return (

    <SafeAreaView>
      <View style={{ padding: 30 }}>
        <Text>Size of a room:</Text>
        <TextInput
          style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setSize(text)}
          value={size}

        />
        <Text>Price per metre of flooring:</Text>

        <TextInput

          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}

          onChangeText={(text) => setFlooringPrice(text)}

          value={flooringPrice}
        />
        <Text>Price per unit of flooring installation:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setInstallationCost(text)}
          value={installationCost}
        />
        <Button title="Calculate" onPress={calculate} />
      </View>

    </SafeAreaView>

 );

};


export default App;