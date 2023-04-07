import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const Category = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.txtQ}>
            <Text style={styles.txtTitle}>لطفا دسته بندی سوال خود را مشخص کنید</Text>
        </View>
        <View style={styles.cat}> 
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>سفر</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>شخصیت و عواطف</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>خوانواده و دوستی</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>کار و پول</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>فرهنگ و سلیقه</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>عشق و رابطه</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>روابط جنسی</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>خود</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.button}>
                <Text style={styles.buttonText}>زندگی و مرگ</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Questions')
            }} style={styles.nextButton}>
                <Text style={styles.buttonText}>بعدی</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4E4FF',     
    },
    txtQ: {
        backgroundColor: '#ecdec2',
        marginTop: 200,
        marginHorizontal: 50,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: 'black',
        width: '70%',
    },
    txtTitle: {
        fontSize: 32,
    },
    cat: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 5,
        minHeight: 32,
        borderColor: 'black'
      },
      buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
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