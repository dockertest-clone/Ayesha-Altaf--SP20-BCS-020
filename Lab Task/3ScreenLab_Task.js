import * as React from 'react';
import {useState} from 'react';
import { View, Text ,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { View, Text,StyleSheet,SafeAreaView } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Ionicons from '@expo/vector-icons/Ionicons';



export default function DetailsScreen({ navigation }) {
    const [userName, setUserName] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          
                 
          <TextInput style={styles.input1}
        
          editable={true}
          value={userName}
          onChangeText={(username) => setUserName(username)}
          multiline={false}
          placeholder="Enter Your Name"
          placeholderTextColor="black"
          maxLength={200}
          />
            
        <TouchableOpacity 
       onPress={() =>
        { if(userName==''){
            alert("Name is Required")
            return;
          }
            navigation.navigate('Profile', {
                paramKey: userName,
              })
              setUserName('')
        }
 
      }
       >
      <Text style={styles.Button}>Submit</Text>
      </TouchableOpacity>
        </View>
    );
}

const ProfileScreen = ({route}) => {
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
        
          <Text style={{ fontSize: 30, fontWeight: 'bold',marginTop:200 }}>
            Your Name is Below 
          </Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold',marginTop:25 }}>
            {route.params.paramKey}
          </Text>
        </View>
        
      </SafeAreaView>
    );
  };

  export default function SettingScreen({ navigation }) {

    const [current, setCurrent] = useState("test");
     
  
      const themetextstyle=current==='test' ? styles.lightThemeText : styles.darkThemeText;
      const themeContainerStyle=
     current === 'test' ? styles.lightContainer : styles.darkContainer;
  
      return (
          <View style={[styles.container,themeContainerStyle]}>
             
  
  <View style={{flexDirection:'row'}}>
  
  <View style={{flexDirection:'row'}}>
  <RadioButtonGroup
          containerStyle={{ marginBottom: 10 }}
          selected={current}
         
                onSelected={(value) =>{ 
            setCurrent(value)
            console.log(current)
           
           }
          }
          radioBackground="green"
        >
          
          <RadioButtonItem
           value="test" 
           
          label=""
            />
            <View style={{marginTop:20}}></View>
          <RadioButtonItem
            value="test2" 
          label=''
          />
        </RadioButtonGroup>
  </View>
  <View style={{flexDirection:'column'}}>
  <View style={{marginTop:-2}}></View>
    <View style={{flexDirection:'column'}}><Text  style={[styles.text,themetextstyle]}>Light Mode</Text></View>
    <View style={{marginTop:18}}></View>
    <View style={{flexDirection:'column'}}><Text  style={[styles.text,themetextstyle]}>Dark Mode</Text></View></View>
  
     
  
     </View>
       
          </View>
      );
  }

  // Screens
import Home from './screens/Home';
import Setting from './screens/Setting';
import Person from './screens/Profile';


//Screen names
const homeName = "Home";
const detailsName = "Profile";
const settingsName = "Setting";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
       
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Home}
        options={{
         
          tabBarIcon : ({size,focused})=>(
            <Ionicons name='home' size={size} color ={focused ? 'tomato' : '#ccc'} />
            
          )
        }} />
        <Tab.Screen name={detailsName} component={Person} 
           options={{
            
            tabBarIcon : ({size,focused})=>(
              <Ionicons name='person' size={size} color ={focused ? 'tomato' : '#ccc'} />
              
            )
          }}/>
        <Tab.Screen name={settingsName} component={Setting} 
           options={{
            
            tabBarIcon : ({size,focused})=>(
              <Ionicons name='settings' size={size} color ={focused ? 'tomato' : '#ccc'} />
          
            )
          }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
        }
    

const styles = StyleSheet.create({
    input1: {
        width: 350,
        height: 45,
        fontSize:16,
        marginTop:250,
       
        paddingStart:20,
        borderColor: "#ff7700",
        alignItems: "center",
        borderWidth: 1,
        alignSelf:'center',
        borderRadius: 10,
      },
      Button: {
        fontSize: 15,
        width: 150,
        color: "white",
        marginTop:40,
        marginBottom:10,
        borderRadius: 10,
        backgroundColor: "#ff7700",
        textAlign: "center",
        alignSelf:'center',
        fontWeight: "bold",
        alignItems: "center",
        lineHeight: 40,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
      },
      heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
      },
      textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
      },
      lightContainer: {
        backgroundColor: 'white',
      },
      darkContainer: {
        backgroundColor: '#242c40',
      },
      lightThemeText: {
        color: '#242c40',
        fontSize:20,
        marginLeft:20
      },
      darkThemeText: {
        color: 'white',
        fontSize:20,
        marginLeft:20
      },
    });
    
 
