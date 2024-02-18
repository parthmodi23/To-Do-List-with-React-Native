import React ,{useState}from "react";
import { View,TextInput,Button,StyleSheet, TouchableOpacity, Modal } from "react-native";

const Goallnput = (props) =>{

    const [addGoal, setAddGoal] = useState('')

  const handleAddGoal=(enterdtext)=>{
    setAddGoal(enterdtext) 
  }

  const handlenull=(addGoal)=>{
    if(addGoal==='') {
      alert("please Enter Valid Goal!")
      return;
    }
  }

    return(

        <View style={styles.addview}>
        <TextInput style={styles.add}
          placeholder='Add Your Goals'
          onChangeText={handleAddGoal}  
        // value={addGoal} use if you wan to directly show a value 
        />
        <View style={styles.Button}>
          <View style={styles.innerbutton} >
          <Button title='Add' onPress={()=> {props.onAddGoal(addGoal)}} />
          </View>
          <View style={styles.innerbutton}>
          <Button  title='Cancel' color='red' onPress={()=> props.forvisibility(false)} />
          </View>
        </View>

       
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
        margin:20,
        justifyContent:'space-between',
        width: '75%',
        borderBottomColor:'red',
        borderRadius:1
      },
      Button:{
        
        flexDirection:'row',
        width:'60%',
        justifyContent:'space-between'
      },
      innerbutton:{
        width:'40%',

      }
});
export default Goallnput;