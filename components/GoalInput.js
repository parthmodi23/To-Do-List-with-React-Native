import React ,{useState}from "react";
import { View,TextInput,Button,StyleSheet, TouchableOpacity, Modal } from "react-native";

const Goallnput = (props) =>{

    const [addGoal, setAddGoal] = useState('')


    return(

        <View style={styles.addview}>
        <TextInput style={styles.add}
          placeholder='Add Your Goals'
          onChangeText={(enterdtext) => { setAddGoal(enterdtext) }}  
        // value={addGoal} use if you wan to directly show a value 
        />
        <View style={styles.Button}><Button title='Add' onPress={()=> props.onAddGoal(addGoal)} />
        <Button title='Cancel' color='red' onPress={()=> props.forvisibility(false)} /></View>

       
      </View>
     

    );
}
const styles = StyleSheet.create({
    addview: {
        flex:1,
        justifyContent:"center",
        alignItems: 'center'
      },
      add: {
        borderBottomWidth: 1,
        margin:20,
        justifyContent:'space-between',
        width: '75%',
        
        borderBottomColor: 'Black',
      },
      Button:{
        
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-around'
      }
});
export default Goallnput;