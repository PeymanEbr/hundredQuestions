import { StyleSheet, Text, View,Pressable } from 'react-native'
import React, { useState } from 'react'
import Data from '../Data'

const Questions = ({navigation}) => { 
  const [question,setQuestion] = useState(Data[0].question);
  const [numberQuestion,setNumberQuestion] = useState(0);
  return (
    <View style={styles.container}>
        <Text style={styles.txtTitle}>{question}</Text>
        <View style={styles.button}>
            <Pressable onPress={() => {
                setQuestion(Data[numberQuestion].question);
                let newNumber = numberQuestion +1; 
                if(numberQuestion != 4) setNumberQuestion(newNumber);
                else setNumberQuestion(0);
                console.log(numberQuestion);
            }} style={styles.nextButton}>
                <Text style={styles.buttonText}>بعدی</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4E4FF',     
    },
    txtTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecdec2',
        fontSize: 32,
        marginTop: 200,
        marginHorizontal: 50
    },
    button: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 50,
        marginTop: 20,
        borderRadius: 10
      }
})