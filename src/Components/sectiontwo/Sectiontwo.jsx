import React from 'react';
import {StyleSheet, View, Text, Image, FlatList, SectionList} from 'react-native';
import useStore from '../Zustand/Zustand';

const styles = StyleSheet.create({
  Preferences: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
    marginBottom: 10,
  },
  header: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
    backgroundColor: 'grey',
    borderWidth: 0
  },
});

const data = [
  {
    title: 'General',
    data: ['Account info', 'Security'],
  },
  {
    title: 'Preferences',
    data: ['Dark Mode', 'Notifications'],
  },
];

export default function Sectiontwo() {
  const {dark,name} = useStore();
  return (
    <View
      style={[
        styles.Preferences,
        {backgroundColor: dark ? '#ADB5BD' : 'white'},
      ]}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, section: {title} }) => (
          <View style={item === 'Security' || item === 'Notifications' ? styles.Without : styles.center}>
            <Text style={[styles.text, {color: dark ? 'white' : 'black'}]}>
              {item}
            </Text>
            <Image source={require('../../Assets/Ra.png')} style={styles.Ra} />
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View >
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}
