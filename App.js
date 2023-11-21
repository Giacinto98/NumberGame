import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import {LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useRef } from 'react';
import Colors from './utility/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundCount, setRoundCount] = useState(1);

  const x = useRef(null);

  const [isFontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />; 

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function roundCountHandler() {
    const count = roundCount + 1;
    setRoundCount(count);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGame() {
    screen = <StartGameScreen onPickNumber={pickedNumberHandler} />; 
    setUserNumber();
    setGameIsOver(false);
    setRoundCount(1);
  }

  if(!isFontLoaded) {
    return <AppLoading />
  }

  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {gameIsOver ? <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGame} roundCount={roundCount}/> : (userNumber ? <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} onNextRound={roundCountHandler} /> : screen)}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});