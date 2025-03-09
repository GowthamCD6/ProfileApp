import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import useStore from '../Zustand/Zustand';


const styles = StyleSheet.create({
  profile: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Profilepic: {
    height: 130,
    width: 130,
    borderWidth: 4,
    borderRadius: 60,
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: 140,
    width: 140,
    borderWidth: 4,
    borderRadius: 70,
    borderColor: 'lightgrey',
    },
    Text: {
        color: 'white',
      fontSize: 30,
        marginTop: 30
    }
});
export default function Profile() {
    const { name } = useStore();
  return (
      <ImageBackground
          style={styles.profile}
          source={require('../../Assets/Image.jpeg')}
          resizeMode='cover'
      >
        <View style={styles.Profilepic}>
              <Image style={styles.Image} source={require('../../Assets/profilepic.jpeg')}/>
          </View>
          <Text style={styles.Text}>{name}</Text>
    </ImageBackground>
  )
}
