import { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => 
    [...courseGoals, enteredGoalText]);
    setEnteredGoalText('')
    // console.log(courseGoals);
  };

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.sectionTitle}>
          Course Goals
        </Text>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText}
        placeholder='Your Course Goal'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
        <TouchableOpacity onPress={addGoalHandler}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>

        {/* <Button 
        title='+'
        onPress={addGoalHandler}
        /> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },

  inputContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

    // padding: 5, 
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    // flex: 1,
  },

  inputText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    // backgroundColor: 'FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
    // borderWidth: 2,
    // color: '#cccccc',
    // width: '70%',
    // marginRight: 8,
    // padding: 13
  },

  buttonStyle: {
    width: 50,
    height: 50,
    backgroundColor: '#4e586e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },

  goalsContainer: {
    flex: 4,
  },
  
});
