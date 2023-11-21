import { StyleSheet, View } from "react-native";
import Colors from "../../utility/colors";

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4, //android
        shadowColor: 'black', //IOS
        shadowOffset: { width: 0, height: 2 }, //IOS
        shadowRadius: 6, //IOS
        shadowOpacity: 0.25, //IOS
    },
})