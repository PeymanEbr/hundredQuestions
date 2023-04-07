import { StyleSheet, View,TouchableOpacity,Image,Text,Pressable } from 'react-native'
import React from 'react'

const MainScreen = ({navigation}) => {
  return (
       <View style={styles.container}>
          <View style={styles.header}>
               <TouchableOpacity>
                    <Image
                    source={require("./../assets/icons/send.png")}
                    style={styles.logo}
               />
               </TouchableOpacity>
               <TouchableOpacity>
                    <Image
                         source={require("./../assets/icons/comment.png")}
                         style={styles.logo}
               />
               </TouchableOpacity>
          </View>
          <View style={styles.title}>
               <Text style={styles.text}>100</Text>
               <Text style={styles.text}> پرسش</Text>
               <Text style={styles.textComment}> جعبه ابزاری برای گفت و گو</Text>
          </View>
          <View style={styles.titleButton}> 
          <Pressable onPress={() => {
               navigation.navigate('Category')
          }} style={styles.button}>
               <Text style={styles.buttonText}>شروع</Text>
          </Pressable>
          </View>
       </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#B4E4FF',
    },
    header: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 50,
     marginHorizontal: 30
    },
    logo: {
     width: 40,
     height: 40
    },
    title: {
     marginTop: 80,
     justifyContent: 'center',
     alignItems: 'center'
    },
    text: {
     color: '#F7C04A',
     fontSize: 82,
     marginBottom: 30,
    },
    textComment: {
     fontSize: 24,
    },
    titleButton: {
     marginTop: 100,
     justifyContent: 'center',
     alignItems: 'center'
    },
    button: {
     backgroundColor: "tomato",
     width: 100,
     justifyContent: "center",
     alignItems: "center",
     borderRadius: 10,
     marginTop: 20,
     minHeight: 42,
     borderColor: 'black'
   },
   buttonText: {
     color: "white",
     fontSize: 20,
     fontWeight: "600",
   },
})