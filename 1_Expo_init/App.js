import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <Button title="Button" onPress={() => setOutputText('Button pressed!')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    marginBottom: 20,
  }
});
