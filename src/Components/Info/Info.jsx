import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import useStore from '../Zustand/Zustand';
import Sectionone from '../section1/Sectionone';
import Preferences from '../Preferences/Preferences';
import Sectiontwo from '../sectiontwo/Sectiontwo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#CED4DA',
  },
  Logout: {
    height: 50,
    backgroundColor: '#db1616',
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 40,
    borderRadius: 10,
  },
  lgtext: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  cameraButton: {
    height: 50,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});

export default function Info() {
  const {dark} = useStore();
  const [showCamera, setShowCamera] = useState(false);

  // Toggle camera visibility
  const toggleCamera = () => {
    console.log('Toggling camera, new state:', !showCamera);
    setShowCamera(!showCamera);
  };

  // Function to handle photo captured
  const handlePhotoCaptured = photoPath => {
    console.log('Photo captured:', photoPath);
    // Do something with the photo path if needed
    toggleCamera(); // Go back to main screen after capture
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={[
          styles.container,
          {backgroundColor: dark ? '#495057' : 'lightgrey'},
        ]}>
          <>
            <Sectionone />
            <Preferences />
            <Sectiontwo />

            <TouchableOpacity
              style={[
                styles.Logout,
                {backgroundColor: dark ? '#CED4DA' : '#db1616'},
              ]}
              onPress={() => Alert.alert('Logged out')}>
              <Text
                style={[styles.lgtext, {color: dark ? '#212529' : 'white'}]}>
                Logout
              </Text>
            </TouchableOpacity>
          </>
      </View>
    </SafeAreaView>
  );
}
