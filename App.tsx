import React, { Component, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
  FlatList,
} from 'react-native';
import Profile from './src/Components/profile/Profile';
import Info from './src/Components/Info/Info';
import useStore from './src/Components/Zustand/Zustand';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

const data =  [
  {key: '1', Component: <Profile/>},
  {key: '2', Component: <Info/>},
]


export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const { dark, name, setName } = useStore();
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
    <SafeAreaView style={styles.view}>
      <StatusBar
        backgroundColor={dark ? '#343A40' : '#ADB5BD'}
        barStyle={'dark-content'}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={data}
            keyExtractor={item => item.key}
            renderItem={({item}) => <View>{item.Component}</View>}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}