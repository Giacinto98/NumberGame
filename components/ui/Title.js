import { Text, StyleSheet } from "react-native";
import Colors from "../../utility/colors";

function Title(props) {
    return (
        <Text style={styles.title}>{props.title}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        fontSize: 30,
        color: Colors.white,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 10,
    }
})

export default Title;