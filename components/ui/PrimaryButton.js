import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../utility/colors";

function PrimaryButton({ children, onPress }) {

    function pressHandler() {
        onPress();
    }

    return (
        <View style={styles.externalContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.internalContainer, styles.pressed] : styles.internalContainer} /* al click sul componente pressible viene passato un oggetto da cui prendiamo pressed, che se true applica più stili, altrimenti solo uno stile */
                android_ripple={{color: Colors.primary600}}
                onPress={pressHandler}    
            >
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    externalContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    internalContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 8, //android,
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,

    }
})