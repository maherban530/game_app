import { useEffect, useState } from 'react';
import{ Text, View, StyleSheet, Alert, FlatList } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude){
 const rndNum = Math.floor(Math.random() * (max - min)) + min;

 if(rndNum === exclude){
     return generateRandomBetween(min, max, exclude);
 }else{
     return rndNum;
 }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(()=>{
        if(currentGuess === userNumber){
           onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    }, []); 


    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNumber) || 
        (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text:'Sorry!', style: 'cancel'}])
            return;
        }

        if(direction === 'lower'){
          maxBoundary = currentGuess;
        }else{
          minBoundary = currentGuess + 1;          
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
            <Text>Higher or Lower</Text>
            <View style={styles.buttonContainer}>
            <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='md-remove' size={24} color= {Colors.white} />
            </PrimaryButton>
            </View>
            <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name='md-add' size={24} color= {Colors.white} />
            </PrimaryButton>
            </View>
        </View>
        </Card>
        <View style={styles.listContainer}>
            {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
            <FlatList data={guessRounds}
            renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
            keyExtractor={(item) => item}
             />
        </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,      
    },
    buttonContainer: {
        flexDirection: 'row',     
    },
    buttonsContainer: {
        flex:1,        
    },
    listContainer: {
        flex:1,
        padding: 16,       
    },

})