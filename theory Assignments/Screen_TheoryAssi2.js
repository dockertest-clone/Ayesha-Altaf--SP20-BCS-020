import * as React from 'react';
import { Text, View, StyleSheet , TextInput , TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
    
  return (
    <View style={styles.container}>
  
  
       <Image source={{uri: "https://www.Octobox.com/react_native/react_native_images.htm"}}  />
       
      <Text style={styles.header}>
                  Wellcome to OCTOBOX </Text>
    
    
    <TextInput style={styles.textinput} placeholder="Full Name"
    underlineColorAndroid={'transparent'} />

    <TextInput style={styles.textinput} placeholder="Email"
    underlineColorAndroid={'transparent'} />

    <TextInput style={styles.textinput} placeholder="Password"
underlineColorAndroid={'transparent'} />


    <TextInput style={styles.textinput} placeholder="Confirm Password"
    underlineColorAndroid={'transparent'} />

    <TouchableOpacity style={styles.button}> 
        <Text style={styles.btntext}>  Sign Up </Text>    
    </TouchableOpacity>
  
   <Text style={styles.footer}>
                  Alreadyamember ? Signin!  </Text>


      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}
>>>>>>>>>>Styling>>>>>>>>>>>>>>>>>


const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3478db',
    padding: 8,
  },
  
  textinput: {
    alignSelf: 'stretch',
    height: 35,
    marginBottom: 20,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    
  },

  header: {
    margin: 20,
    fontSize: 20,
    color: '#fff',
    paddingBottom: 40,
    marginBottom:10,
    
    textAlign: 'center',
  },
  footer: {
      margin: 20,
    fontSize: 15,
    color: '#fff',
    paddingBottom: 40,
    marginBottom:10, 
    textAlign: 'center',
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    textShadowColor: '#308db',
    padding: 20,
    
    background: '#3448db',
    marginTop: 10,
  }
});
