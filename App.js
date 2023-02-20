import {React} from 'react';
import { StyleSheet,Text,ScrollView,StatusBar, Button} from 'react-native';
import {Buttons} from './Buttons/Buttons';
import { ScoreProvider } from './Context/ScoreContext';
import { Score } from './Counter/Count';



export default function App() {
  return (
    <>
    <StatusBar
    barStyle= "dark-content"
    hidden={false}
    backgroundColor="black"
    translucent={true}
    />
<ScrollView>
    <ScoreProvider > 
      <Score />
      <Buttons />
    </ScoreProvider>
    </ScrollView>
 </>
  );

};