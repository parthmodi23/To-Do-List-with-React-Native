import React from "react";
import { View, Text,StyleSheet,Button, TouchableOpacity, Modal } from "react-native";

const Goalltems = (props) => {
    console.log(props); // Log props to check if onDelete is present

    return ( 
        
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
       
        <Text style={styles.taskcss} >{props.title}</Text>        
        <View style={styles.editdelete}>
            <Button title='Edit'  />
            <TouchableOpacity >    
            <Button title='Delete' onPress={()=>{props.onDelete(props.id)}} />       
            </TouchableOpacity>
        </View>
        
    </View>);
};


const styles = StyleSheet.create({
    taskcss: {
        backgroundColor: '#f442',
        borderBottomColor: 'blue',
        borderWidth: 1,
        margin: 10,
        padding: 3
      },
      editdelete: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        margin: 10,
      }
})
export default Goalltems;
