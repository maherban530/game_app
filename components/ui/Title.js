import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


function Title({children}){
   return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'montserratB',
        color: Colors.white,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 12,
    },
});