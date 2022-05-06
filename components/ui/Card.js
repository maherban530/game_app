import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Card({children}){
    return <View style={styles.inputContainer}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
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
});