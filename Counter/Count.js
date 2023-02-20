import React, { createContext, useContext, useState } from "react";
import {StyleSheet, View,Text, Image, TouchableOpacity} from "react-native";
import { ScoreContext } from "../Context/ScoreContext";
import { MaterialCommunityIcons,Feather } from '@expo/vector-icons';

export default function Score() {
    const {
      score1,
      score2,
      resetScore
    } = useContext(ScoreContext);
    return (
    <>
     <View>
        
            <Image  source={require('../assets/Nine.jpeg')}
            style ={{
                resizeMode:"contain",
                marginTop:30,
                height:75,
                width:170,
                marginLeft:79,
           
            }}
            
            />


    </View>

    <View style={styles.otherBtn}>
          <TouchableOpacity onPress={resetScore}>
            <View style={styles.resetButton}>
              <Text style={styles.buttonText}>
                <Feather name="refresh-cw" size={24} color="white" /> Reset
              </Text>
            </View>
          </TouchableOpacity>
        </View>

    <View flexDirection="row" justifyContent="space-around" >
    <TouchableOpacity>
    <View>
    <Image  source={require('../assets/OnGreen.png')}
            style ={{
                resizeMode:"contain",
                resizeMode:"contain",
                backgroundColor:"white",
                justifyContent: "center",
                alignContent:"center",
                borderWidth: 2,
                borderRadius:85/2,
                borderColor:"#4EBF6B",
                width: 75,
                height:75
            }}
            /> 
            </View>
            </TouchableOpacity>
            <TouchableOpacity >
 <View>
             <Image  source={require('../assets/OnBlue.png')}
            style ={{
                resizeMode:"contain",
                backgroundColor:"white",
                justifyContent: "center",
                alignContent:"center",
                borderWidth: 2,
                borderRadius:85/2,
                borderColor:"#3D4675",
                width: 75,
                height:75
            }}
            /> 
            </View>
            </TouchableOpacity>
            </View>
           



<View style ={styles.points}>
    <View style= {styles.point1}>
<Text style = {styles.pointtext}>{score1 >= 0 ? score1 : `${score1}`}</Text>
</View>
<View style= {styles.point2}>
    <Text style = {styles.pointtext}>{score2 >= 0 ? score2 : `${score2}`}</Text>
    </View>
</View>

</>
   );
};
const styles = StyleSheet.create({

    otherBtn: {
        marginHorizontal: 100,
        marginBottom:50,
        marginTop:-10
      },
      resetButton: {
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: "#FF7C08",
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 20,
        textAlign: "center",
      },
    points:{
        borderWidth:2,
        backgroundColor:"#FF7C08",
        borderColor:"#FF7C08",
        borderRadius:10,
        padding:10,
        margin:15,
        flexDirection:"row",
        justifyContent: "space-around",
        marginBottom:-10
    },
   
   
    pointtext:{
        color:"white",
      fontSize:45,
    },
   point1:{
    marginRight:5
   },
   point2:{
    marginLeft:50,
    
   },
   
  });
export {Score};