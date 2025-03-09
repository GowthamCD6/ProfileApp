import React, { useState } from 'react'
import useStore from '../Zustand/Zustand';
import { ActivityIndicator, Alert, Button, Image, Modal, Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  Info: {
    borderColor: 'black',
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    elevation: 10,
    marginBottom: 50,
  },
  Heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: '900',
    marginBottom: 20,
  },
  SubText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '900',
    marginBottom: 10,
  },
  Input: {
    height: 60,
    backgroundColor: 'lightgrey',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  Center: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 40,
  },
  Button: {
    backgroundColor: '#343A40',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  SaveChanges: {
    color: 'white',
    fontSize: 20,
  },
  Overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tick: {
    height: 100,
    width: 100,
  },
  ad: {
    color: 'black',
    fontWeight: '900',
    fontSize: 30,
    marginTop: 20,
  },
  sf: {
    fontSize: 20,
  },
  close: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    padding: 10,
    borderRadius: 10,
    marginTop: 30
  },
  closeTxt: {
    color: 'white',
    fontSize: 25
  },
});


export default function Sectionone() {
  const { setName, dark, setToggle } = useStore();
  const [modelVisible, setModelvisible] = useState(false); 
  const [loading, setLoading] = useState(false); // 🔥 New state for activity indicator

  const handleSave = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
      setModelvisible(true); // Show success modal
    }, 2000);
  };
  
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modelVisible}>
        <View style={styles.Overlay}>
          <View style={styles.sub}>
            <Image
              source={require('../../Assets/Right.png')}
              style={styles.tick}
            />
            <Text style={styles.ad}>Success!</Text>
            <Text style={styles.sf}>Changes saved sucessfully!</Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setModelvisible(false)}>
              <Text style={styles.closeTxt}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View
        style={[styles.Info, {backgroundColor: dark ? '#ADB5BD' : 'white'}]}>
        <Text style={styles.Heading}>Personal Information</Text>
        <View>
          <Text style={styles.SubText}>Name: </Text>
          <TextInput
            style={styles.Input}
            placeholder="Name"
            onChangeText={setName}></TextInput>
        </View>
        <View>
          <Text style={styles.SubText}>Email: </Text>
          <TextInput style={styles.Input} placeholder="Email"></TextInput>
        </View>
        <View style={styles.Center}>
          <Text style={styles.SubText}>Dark Mode: </Text>
          <Switch
            trackColor={{false: '#343A40', true: '#DEE2E6'}}
            thumbColor={'#f4f3f4'}
            onValueChange={setToggle}
            value={dark}
          />
        </View>
        <Pressable
          onPress={handleSave}
          style={[
            styles.Button,
            {backgroundColor: loading ? 'white' : '#343A40'},
          ]}>
          {loading ? (
            <ActivityIndicator size="medium" color="#343A40" />
          ) : (
            <Text style={[styles.SaveChanges]}>Save Changes</Text>
          )}
        </Pressable>
      </View>
    </>
  );
}
