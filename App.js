import { useState } from 'react';
import { Alert, Button, FlatList, Modal, StyleSheet, View } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [viewGoal, setViewGoal] = useState(false);
  const [newGoal, setNewGoal] = useState(false);
  const [doneGoal, setDoneGoal] = useState(0);

  const showGoal = (goalValue) => {
    if (goalValue === '') { alert("Please enter valid goal!"); setCourseGoal(''); return; }

    setCourseGoal((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: goalValue }
    ]);


    Alert.alert(goalValue + " has been added to your goals.", '', [{ text: 'okay', onPress: () => setNewGoal(false) }]);
  };

  const handleEditGoal = (goalId, updatedGoal) => {
    setCourseGoal((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, value: updatedGoal } : goal
      )
    );
  };
  const handleDelete = (goalId) => {
    setCourseGoal((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== goalId));
  };

  const handleDoneGoal = (goalId) => {
    setDoneGoal((prevDoneGoals) => prevDoneGoals + 1);
    handleDelete(goalId);
  };



  return (
    <View style={styles.container}>
      <View style={styles.innerbutton}>
        <Button title='Add Goal' onPress={() => setNewGoal(true)} />
      </View>
      <Modal visible={newGoal}>
        <GoalInput onAddGoal={showGoal} forvisibility={setNewGoal} />
      </Modal>
      <View style={styles.innerbutton}>
        <Button title='Show Goals' onPress={() => setViewGoal(true)} />
      </View>
      <Modal visible={viewGoal}>
        <Button title={`Done Goals: ${doneGoal}`} color='green' />
        <FlatList
          data={courseGoal}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItems
              id={itemData.item.id}
              onDelete={handleDelete}
              onDone={handleDoneGoal}
              onEdit={handleEditGoal}
              title={itemData.item.value}
            />
          )}
        />

        <Button title='Back' onPress={() => setViewGoal(false)} />
      </Modal>
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
    width: '55%',
  },
});
