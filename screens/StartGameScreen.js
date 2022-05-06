import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function StartGameScreen({onPickNumber}){
    const [enterNumber, setEnterNumber] = useState('');

    const {width, height} = useWindowDimensions(); 

    function numberInputHandler(enteredText){
        setEnterNumber(enteredText);
    };

    function resetInputHandler(){
        setEnterNumber('');
    };

    function confirmInputHandler(){
        const chooseNumber = parseInt(enterNumber);

        if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99){
            Alert.alert('Invalid number!',
            'Number has to be a number between 1 to 99.', 
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(chooseNumber);
    };
const marginTopDistance = height < 380 ? 30 : 100;
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior= 'position' >
        <View style={[styles.titleContainer, {marginTop: marginTopDistance}]}>
        <Title>Guess My Number</Title>
        <Card>
           <Text style={styles.enterNumberTitle}>Enter a Number</Text>
            <TextInput style={styles.numberInput}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false} 
            onChangeText={numberInputHandler}
            value={enterNumber}
            />
            <View style={styles.buttonContainer}>
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonsContainer}>               
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex:1,        
    },
    inputContainer: {     
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
      elevation: 4,
      borderRadius: 8,
      padding: 16,
      marginTop: 100,
      backgroundColor: Colors.primary800,
      shadowColor: 'black',
      shadowOffset: {height: 0, width: 2},
      shadowRadius: 6,
      shadowOpacity: 0.25,
    },

    numberInput: {
        height: 50,
        width: 44,
        fontSize: 30,
        textAlign: 'center',
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    buttonContainer: {
     flexDirection: 'row',     
    },
    buttonsContainer: {
        flex:1,        
    },
    titleContainer: {
        flex:1,
        // marginTop:  < 400 ? 30 : 100,
        alignItems: 'center',
    },
    enterNumberTitle: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'montserratR',
    },
  });
  