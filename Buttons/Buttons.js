import React, { useContext } from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { ScoreContext } from '../Context/ScoreContext';
export default function Buttons() {
    const { increaseScore
     } = useContext(ScoreContext);
    return (
    <>
   
 <View style={styles.rows}>
   <View>
    <View style= {styles.align}>
    <TouchableOpacity style= {styles.border1}  onPress={() => increaseScore(3)} >
        <Text style= {styles.row1}>+3</Text>
    </TouchableOpacity>
    <TouchableOpacity style= {styles.border2}>
        <Text style= {styles.row2} onPress={() => increaseScore(-3)}>-3</Text>
    </TouchableOpacity>
    
    </View>
    <View style= {styles.align}>
    <TouchableOpacity style= {styles.border} onPress={() => increaseScore(2)}>
        <Text style= {styles.row1}  >+2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.border9} onPress={() => increaseScore(9)}>
        
        <Text style= {styles.row2} >+9</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style= {styles.border2}>
        <Text style= {styles.row2} onPress={() => increaseScore(-2)}>-2</Text>
    </TouchableOpacity>
    </View>
    <View style= {styles.align}>
    <TouchableOpacity style= {styles.border1}  onPress={() => increaseScore(1)}>
        <Text style= {styles.row1}>+1</Text>
    </TouchableOpacity>
    <TouchableOpacity style= {styles.border2}>
        <Text style= {styles.row2} onPress={() => increaseScore(-1)}>-1</Text>
    </TouchableOpacity>
    
    </View>
 </View>
 </View>

 <View>
 
 </View>
 </>
  );
};

const styles= StyleSheet.create({
   
    border9:{
       
        backgroundColor:"#FF7C08",
        justifyContent: "center",
        alignContent:"center",
        borderWidth:5,
        borderRadius:85/2,
        borderColor:"#FF7C08",
        width: 75,
        height:75,
        margin:10,
        marginLeft:20,
        marginBottom:19,
        marginRight:11.1  
    },
    
    border:{
        backgroundColor:"white",
        justifyContent: "center",
        alignContent:"center",
        borderWidth: 2,
        borderRadius:85/2,
        borderColor:"black",
        width: 75,
        height:75,
        margin:10,
        marginLeft:18.5,
        marginBottom:19,  
    },
    rows:{
        marginTop:25
    },
    align:{
        flexDirection:"row"
    },
    border1:{
        backgroundColor:"white",
        justifyContent: "center",
        alignContent:"center",
        borderWidth: 2,
        borderRadius:85/2,
        borderColor:"black",
        width: 75,
        height:75,
        margin:10,
        marginLeft:18.5,
        marginRight:117,
        marginBottom:19,  
    },
    border2:{
        backgroundColor:"black",
        justifyContent: "center",
        alignContent:"center",
        borderWidth: 2,
        borderRadius:85/2,
        borderColor:"black",
        width: 75,
        height:75,
        margin:10,
        marginLeft:18.5,
        marginBottom:19,  
    },
    row1:{
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
        color:"black"
            },

row2:{
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
        color:"white"
            }                
});


export {Buttons}