import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScoreContext } from "../Context/ScoreContext";
import { Feather } from '@expo/vector-icons';

export default function Score() {
  const {
    score1,
    score2,
    setTeam,
    resetScore
  } = useContext(ScoreContext);

  return (
    <>
      <View>
        <Image source={require('../assets/Nine.jpeg')} style={styles.logo} />
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
        <TouchableOpacity onPress={(e) => setTeam("Green")}>
          <View>
            <Image source={require('../assets/OnGreen.png')} style={styles.scoreGreenButton} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={(e) => setTeam("Blue")}>
          <View>
            <Image source={require('../assets/OnBlue.png')} style={styles.scoreBlueButton} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.points}>
        <View style={styles.point1}>
          <Text style={styles.pointtext}>{score1}</Text>
        </View>
        <View style={styles.point2}>
          <Text style={styles.pointtext}>{score2}</Text>
        </View>
      </View>

    </>
  );
};
const styles = StyleSheet.create({

  logo: {
    resizeMode: "contain",
    marginTop: 30,
    height: 75,
    width: 170,
    marginLeft: "auto",
    marginRight: "auto"
  },

  otherBtn: {
    marginHorizontal: 100,
    marginBottom: 50,
    marginTop: -10,
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

  points: {
    borderWidth: 2,
    backgroundColor: "#FF7C08",
    borderColor: "#FF7C08",
    borderRadius: 10,
    padding: 10,
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: -10
  },

  scoreGreenButton: {
    resizeMode: "contain",
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "#4EBF6B",
    borderWidth: 2,
    borderRadius: 85 / 2,
    width: 75,
    height: 75
  },

  scoreBlueButton: {
    resizeMode: "contain",
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "#3D4675",
    borderWidth: 2,
    borderRadius: 85 / 2,
    width: 75,
    height: 75
  },

  pointtext: {
    color: "white",
    fontSize: 45,
  },

  point1: {
    // marginRight: 5
  },

  point2: {
    // marginLeft: 50,
  },

});
export { Score };