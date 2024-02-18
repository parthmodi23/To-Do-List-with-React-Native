import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Alert } from "react-native";

const GoalItems = (props) => {
    const [editedGoal, setEditedGoal] = useState(props.title);
    const [isEditing, setIsEditing] = useState(false);
    const [showButton,SetShowButtons]=useState(false)

    const handelShowButton=()=>{
        if(showButton)  SetShowButtons(false)
        else   SetShowButtons(true)

    } 
    
    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        props.onEdit(props.id, editedGoal);
        if(editedGoal === ""){
            alert("Please Enter Valid Goal!")
            return;
        }
        setIsEditing(false);
    };

    return (
        <View style={styles.goalContainer}>

            {isEditing ? (
            
                <View style={styles.editContainer}>
                    <TextInput
                        style={styles.input}
                        value={editedGoal}
                        onChangeText={setEditedGoal}
                    />
                    <View style={styles.editButtons}>
                        <Button title="Save" color='#7CFC50' onPress={handleSave} />
                        <Button title="Cancel" color='#E30B1C' onPress={() => setIsEditing(false)} />
                    </View>
                </View>
            ) : (
                <View>
                    <TouchableOpacity onPress={handelShowButton}> 
                    <View>
                        <Text style={styles.goalText}>{props.title}</Text>
                    </View>
                </TouchableOpacity>
                    { showButton ? (
                        <View style={styles.buttonsContainer}>
                        <View style={styles.innerbutton}>                      
                              <Button title="Done" color='#7CFC50' onPress={() => props.onDone(props.id)} />
                        </View>
                        <View style={styles.innerbutton}>
                            <Button title='Edit' color='#7DF9FF' onPress={handleEdit} />
                        </View>
                        <View style={styles.innerbutton}>
                            <Button title='Delete' color='#E30B1C' onPress={() => props.onDelete(props.id)} />
                        </View>
                    </View>
                        ):(
                            <View></View>
                    )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    goalContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
    goalText: {
        fontSize: 18,
        marginVertical: 8
    },
    editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        width: '55%',
    },
    editButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%',
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    innerbutton:{
        width:'24%',
    }
});

export default GoalItems;
