import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
        <View style = {styles.taskWrapper}>
          <Text style = {styles.sectionTitle }>TODAY'S TASK</Text>
          <View style = {styles.items}>
            {/* This is where the task goes*/}
            <Task text = {'Task 1'}/>
            <Task text = {'Task 2'}/>
          </View>
        </View>

        <KeyboardAvoidingView behavior = {Platform.OS === "ios" ? "padding" : "height"} style = {styles.writeTaskWrapper}>
          {/* Write a Task bar */}
          <TextInput style = {styles.input} placeholder = {'Write a task'}></TextInput>

          <TouchableOpacity>
            <View style = {styles.addWrapper}>
              <Text style = {styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  items: {
    marginTop: 25,
  }, 

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  input: {
    backgroundColor: '#FFF',
    width: '70%',
    borderRadius: 20,
    marginLeft: 20,
  },
  addWrapper: {},
  addText: {},
});
