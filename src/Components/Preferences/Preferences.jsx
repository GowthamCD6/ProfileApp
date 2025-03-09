import React from 'react'
import { StyleSheet, View, Text, Image, FlatList} from 'react-native'
import useStore from '../Zustand/Zustand';


const styles = StyleSheet.create({
  Preferences: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 60
  },
  Heading: {
    fontSize: 30,
    color: 'black',
    fontWeight: '900',
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
  },
  Ra: {
    height: 24,
    width: 24,
  },
  center: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  Without: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

const nameparts = [
  {key: 1, name: "Notifications"},
  {key: 2, name: "Language"},
  {key: 3, name: "Privacy"},
];

export default function Preferences() {
  const { dark } = useStore();
  return (
    <View style={[styles.Preferences, {backgroundColor: dark? "#ADB5BD": 'white'}]}>
          <Text style={styles.Heading}>Preferences</Text>
      <FlatList
        data={nameparts}
        renderItem={({ item }) => <Parts name={item.name} dark={dark} />}
      />
    </View>
  )
}

const Parts = ({name,dark}) => { 
  return (
    <View style={name === "Privacy"? styles.Without: styles.center}>
      <Text style={[styles.text, {color: dark? 'white': 'black'}]}>{name}</Text>
      <Image source={require('../../Assets/Ra.png')} style={styles.Ra} />
    </View>
  );
}
