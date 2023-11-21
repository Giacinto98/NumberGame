import { StyleSheet, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContianer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons'

let minActual = 1;
let maxAcutal = 100;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function GameScreen ({ userNumber, onGameOver, onNextRound }) {
    const initialGuess = generateRandomNumber(1, 100);
    const [currentGuess, setCurrentGuest] = useState(initialGuess);


    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])


    function nextGuessHandler(direction) {
        if(direction === 'lower' && currentGuess < userNumber || direction === 'upper' && currentGuess > userNumber) {
            Alert.alert('Do not lie!!', 'You know that this is wrong', [{text: 'Sorry!', style: 'Cancel'}])
            return
        }

        if(direction === 'lower'){
            maxAcutal = currentGuess;
        } else {
            minActual = currentGuess + 1;
        }
        
        setCurrentGuest(generateRandomNumber(minActual, maxAcutal));
        onNextRound();
    }
    
    return (
        <View style={styles.screen}>
            <Title title='Opponent is guest'/>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or lower?</InstructionText>
                <View style={styles.buttonContainer}>
                    <View style={{flex: 1}}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons name='md-remove' size={24} color='white' />
                        </PrimaryButton>
                    </View>
                    <View style={{flex: 1}}>
                        <PrimaryButton onPress={() => nextGuessHandler('upper')}>
                            <Ionicons name='md-add' size={24} color='white' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}


export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonContainer: {
        flexDirection: 'row',
    }
})