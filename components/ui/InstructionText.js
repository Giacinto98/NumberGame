import { Text, StyleSheet } from "react-native";
import Colors from "../../utility/colors";

function InstructionText({children}) {
    return (
        <Text style={styles.textStyle}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.accent500,
        fontSize: 25,
        alignSelf: 'center'
    }
})