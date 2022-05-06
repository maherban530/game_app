import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'montserratR': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserratB': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading></AppLoading>;
  }

  function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber);
      setGameIsOver(false)
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return (
  <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
  <ImageBackground
  source={require('./assets/favicon.png')}
  resizeMode='stretch' style={styles.rootScreen}
  imageStyle={styles.backgroundImageL}
  >
  <SafeAreaView style={styles.rootScreen}>
  {screen}
  </SafeAreaView>
  </ImageBackground>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },
  backgroundImageL:{
    opacity: 0.15,
  }
});
