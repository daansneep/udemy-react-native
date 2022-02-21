import {Button, StyleSheet, View, TextInput, Text, FlatList} from 'react-native';
import { useState } from "react";

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ courseGoals, setCourseGoals ] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: currentGoals.length + 1, text: enteredGoal }])
  };

  return (
    <View style={ styles.app }>
      <View style={ styles.inputWrapper }>
        <TextInput
            style={ styles.textInput }
            placeholder="Course Goal"
            onChangeText={ goalInputHandler }
            value={ enteredGoal }
        />
        <Button style={ styles.button } title="add" onPress={ addGoalHandler } />
      </View>
      <FlatList data={ courseGoals } renderItem={
        (data) => (
          <Text>{ data.item.text }</Text>
        )
      }>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginTop: 30,
    padding: 20,
  },
  textInput: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
