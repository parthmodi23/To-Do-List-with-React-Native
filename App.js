import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, View } from 'react-native';
import Goalltems from './components/GoalItems';
import Goallnput from './components/GoalInput';

export default function App() {

  const [courseGoal, setCourseGoal] = useState([]);
  const [viewGoal, SetViewGoal] = useState(false);
  const [newGoal, SetNewGoal] = useState(false);
  const [doneGoal, SetDoneGoal] = useState(0)


  const showGoal = (goalValue) => {
    console.log("Adding goal:", goalValue); //
    // if (goalValue.length === 0) return;
    setCourseGoal((newValue) => [...newValue,
    { id: Math.random().toString(), value: goalValue }
    ]);
  }


  const handleDelete = (goalid) => {
    console.log(goalid)
    setCourseGoal((currentGoals) => {
      console.log(currentGoals)
      return currentGoals.filter((goal) => {
        return goal.id !== goalid;
      });
    });
  };

  const setVisibility = (Boolean) => {
    SetViewGoal(Boolean)
  }

  const setNewGoalVisibility = (Boolean) => {
    SetNewGoal(Boolean)
  }

  const handleDoneGoal = (goalid) => {
    SetDoneGoal(doneGoal + 1)
    handleDelete(goalid)
  };

  return (
  <View style={styles.container}>

      <View style={styles.innerbutton}>
        <Button title='Add Goal' onPress={() => { setNewGoalVisibility(true) }} />
      </View>

      <Modal visible={newGoal}>
        <Goallnput onAddGoal={showGoal} forvisibility={setNewGoalVisibility} />
      </Modal>

      <View style={styles.innerbutton}>
        <Button title='Show Goals' onPress={() => { setVisibility(true) }} />
      </View>

  <View>
        {/* Instead of ScrollView, we use FlatList for faster rendering */}
     <Modal visible={viewGoal}>
          <Button title={"Done Goals : " + doneGoal} color='green' />
          <FlatList
            data={courseGoal}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => (
              <Goalltems id={itemData.item.id} onDelete={handleDelete} title={itemData.item.value} onDone={handleDoneGoal} />
            )}

          />
          <View>
            <Button title="Back" onPress={() => { setVisibility(false) }} />
          </View>
      </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',

    alignItems: 'center',
    padding: 35,
    marginVertical: 15,
  },
  innerbutton: {
    width: '55%'
  }
});
