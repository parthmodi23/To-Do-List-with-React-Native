import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, View } from 'react-native';
import Goalltems from './components/GoalItems';
import Goallnput from './components/GoalInput';

export default function App() {

  const [courseGoal, setCourseGoal] = useState([]);
  const [viewGoal, SetViewGoal] = useState(false);
  const [newGoal, SetNewGoal] = useState(false);



  const showGoal = (goalValue) => {
    console.log("Adding goal:", goalValue); //
    if (goalValue.length === 0) return;
    setCourseGoal((newValue) => [
      ...newValue,
      { id: Math.random().toString(), value: goalValue }
    ]);
    setCourseGoal('')
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

  return (
    <View style={styles.container}>
      <View>
        <Button title='Add Goal' onPress={() => { setNewGoalVisibility(true) }} />
      </View>
      <Modal visible={newGoal}>
        <Goallnput onAddGoal={showGoal} forvisibility={setNewGoalVisibility} />
      </Modal>
      <View>

        <View>
          <Button title='Show Goals' onPress={() => { setVisibility(true) }} />
        </View>
        {/* Instead of ScrollView, we use FlatList for faster rendering */}
        <Modal visible={viewGoal}>
          <FlatList
            data={courseGoal}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => (
              <Goalltems id={itemData.item.id} onDelete={handleDelete} title={itemData.item.value} />
            )}

          />
          <View>
            <Button title="Back" onPress={() => { setVisibility(false) }} />

          </View></Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 35,
    marginVertical: 15,
  },
});
