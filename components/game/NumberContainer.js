import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}){
    return <View style={styles.containerNumber}>
       <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    
    containerNumber:{
    borderColor: Colors.accent500,
      padding: deviceWidth / 18,
      margin: deviceWidth / 16,
      borderRadius: 8,
      borderWidth: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText:{
        color: Colors.accent500,
        fontSize: deviceWidth / 16,
        fontWeight: 'bold'
    }
  });
  