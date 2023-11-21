import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../utility/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StrartGameScreen(props) {
    
    const [enteredvalue, setEnteredValue] = useState('');

    function resetInputHandler () {
        setEnteredValue('');     
    }

    function numberInputHandler (newText) {
        setEnteredValue(newText);
    }

    function confirmInputHandler() {
        const parsedNumber = parseInt(enteredvalue);
        if(isNaN(parsedNumber) || parsedNumber > 99 || parsedNumber < 0) {
            Alert.alert('Not Valid Value', 
                'Accepted values are between 0 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }

        props.onPickNumber(parsedNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title title='Guess My Number'></Title>
            <Card>
                <InstructionText>Enter A Number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    value={enteredvalue}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsPosition}>
                    <View style={{ flex: 1 }}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={{ flex: 1 }}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StrartGameScreen;

const styles = StyleSheet.create({
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 3,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonsPosition: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between', 
    },
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

})