import{ Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return (<View style={styles.rootContainer}>
    <Title>Game is Over!</Title>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require('../assets/favicon.png')} />
    </View>
    <Text>Your phone need <Text>{roundsNumber}</Text> rounds guess the number 
    <Text>{userNumber}</Text>
    </Text>
    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>);
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
    },
    imageContainer:{
        height: deviceWidth < 380 ? 150 : 300,
        width: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 300,
        borderWidth: 3,
        borderColor: Colors.white,
        overflow: 'hidden',
        margin: 36,
    },
    image:{
        width: '100%',
        height: '100%',
    }
})