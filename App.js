import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [addGoal, setAddGoal] = useState('You can not write')
  const [courseGoal, setCourseGoal] = useState([])


  // const addnewgoal = (enterdtext) => {
  //   setAddGoal(enterdtext)
  // };

  const showGoal = () => {
    if(addGoal.length === 0) return;
    setCourseGoal((newvalue)=> [...newvalue, addGoal])
  }

  // const handleDelete=(goal)=>{
  //   setCourseGoal(courseGoal.filter((val)=> val !== goal))


  // }

  return (
    <View style={styles.container}>

      <View style={styles.addview}>
        <TextInput style={styles.add}
          placeholder='Add Your Goals'
          onChangeText={(enterdtext)=>{setAddGoal(enterdtext)}}
          value={addGoal}
        />

        <Button title='Add' onPress={showGoal} />
      </View>
      
      <View >
      
        {courseGoal.map((goal) =>(
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
           <Text style={styles.taskcss} key={goal}>{goal}</Text>
           <View style={styles.editdelete}>
           <Button title='Edit'/>
           <Button title='Delete'/>
           </View>
        </View>))}
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },

  addview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  add: {
    borderBottomWidth: 1,
    width: '75%',
    padding: 1,
    borderBottomColor: 'Black',
  },
  
  taskcss:{
    backgroundColor:'#f442' ,borderBottomColor:'blue',borderWidth:1, margin:10,padding:3
  },
  editdelete:{
    flexDirection:"row",
    justifyContent:'space-evenly',
    margin:10,
    
    
  }
});
